import { pool } from "../database";

export const getPersonas = async (req, res) => {
    try {
        const response = await pool.query('select * from fc_listar_persona()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error al listar Personas');
    }
};

export const getPersonaId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_persona_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error al listar Persona por ID');
    }
};

export const createPersona = async (req, res) => {
    try {
        const { apellidos, nombres, dir, tel} = req.body;
        const response = await pool.query('select * from fc_create_persona($1,$2,$3,$4)', [apellidos, nombres, dir,tel]);
        return res.status(200).json({
            message: 'Persona registrada correctamente...!',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error al crear persona...!');
    }
};

export const updatePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido, edad } = req.body;
        const response = await pool.query('select * from fc_update_persona($1,$2,$3,$4)', [nombre, apellido, edad, id]);
        return res.status(200).json({
            message: 'Persona modificada correctamente...!' + response,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error al modificar persona...!');
    }
};

export const deletePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from persona where idpersona=$1', [id]);
        return res.status(200).json({
            message: 'Persona eliminada correctamente...!',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error al eliminar persona...!');
    }
};