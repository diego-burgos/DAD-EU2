import { pool } from "../database";

export const getRoles = async (req, res) => {
    try {
        const response = await pool.query('select * from fc_listar_rol()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error al listar Roles');
    }
};

export const getRolId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_rol_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error al listar Rol por ID');
    }
};

export const createRol = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query('select * from fc_create_rol($1)', [nombre]);
        return res.status(200).json({
            message: "Rol registrado correctamente...!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error al registrar rol...!");
    }
};

export const updateRol = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, estado } = req.body;
        const response = await pool.query('select * from fc_update_rol($1,$2,$3)', [nombre,estado, id]);
        return res.status(200).json({
            message: "Rol modificado correctamente...!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error al modificar rol...!");
    }
};

export const deleteRol = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_delete_rol($1)', [id]);
        return res.status(200).json({
            message: "Rol eliminado correctamente...!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error al eliminar rol...!");
    }
}