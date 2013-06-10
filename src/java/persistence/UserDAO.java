/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;
import model.User;
import java.sql.*;

/**
 *
 * @author thiagojesus
 */
public class UserDAO {
    private Connection conn;
    public UserDAO() throws CLTVDAOException{
        this.conn = ConnectionCLTV.getConnection();
    }
    public void salvar(User u) throws SQLException{
        PreparedStatement ps;
        String SQL = "INSERT INTO tabela values(nome_usu,sobrenome_usu,email_usu,senha_usu,data_usu)"
                + "VALUES('"+u.getNome()+"','"+u.getSobrenome()+"','"+u.getEmail()+"','"+u.getSenha()+"',"
                + "'"+u.getData()+"')";
        ps = conn.prepareStatement(SQL);
        ps.executeUpdate();
    }
}
