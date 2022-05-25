import { pool } from "../database";

export const getUsuario = async (req, res) => {
    try {
        const response = await pool.query('select * from fc_listar_usuario()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error al listar Usuarios");
    }
};

export const createUsuario = async (req, res) => {
    try {
        const { username, password, idpersona, idrol } = req.body;
        const response = await pool.query(
            "select * from fc_create_usuario($1,$2,$3,$4)",
            [username, password, idpersona, idrol]
        );
        return res.status(200).json({
            message: "Usuario registrado correctamente...!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error al registrar usuario...!");
    }
};

export const validarUsuario = async (req, res) => {
    try {
        const { username } = req.body;
        const response = await pool.query(
            "select * from fc_validar_usuario2($1)",
            [username]
        );
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error al validar usuario...!");
    }
}