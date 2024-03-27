import pgService from "../services/pg.service.js";

export const getUsuario = async (usuario, password) => {
    const pg = new pgService();
        return await pg.connection.oneOrNone("SELECT ID, USERNAME FROM USUARIO WHERE USERNAME = $1 AND PASSWORD = $2", [usuario, password])
}

export const registerModel = async ( username, password) => {
    try {
        const pg = new pgService();

        const existingUser = await pg.connection.oneOrNone(`SELECT * FROM USUARIO WHERE USERNAME = $1`, [username]);

        if (existingUser) {
            return {data: 'Nombre de usuario no disponible', status: 409}
        } else {
            const createUser = await pg.connection.oneOrNone(`INSERT INTO USUARIO (USERNAME, PASSWORD) VALUES ($1, $2) RETURNING *`, [username, password]);
         return {data: createUser, status: 201}
        }

    } catch (error) {
        return {data:'Tenemos problemas, intentalo mas tarde', status: 500};
    }
   
}