/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
/**
 *
 * @author thiagojesus
 */
public class ConnectionCLTV {
    public static Connection getConnection() throws CLTVDAOException{
    //Objeto que guarda informacoes da conexao com o SGBD.
    Connection conn;
    //Objeto usado para enviar comandos SQL no SGBD
    Statement stmt;
    try {
        
        Class.forName("com.microsoft.jdbc.sqlserver.SQLServerDriver").newInstance();
        String conexao = "jdbc:sqlserver://192.168.12.4:1433;database=disciplinabd";
        String usuario = "professorbd", senha = "professorbd";
        conn = DriverManager.getConnection(conexao, usuario, senha);
        stmt = conn.createStatement();

        System.out.println("Conexão OK!!!");
        return conn;

        
    } catch (Exception e) {
        e.printStackTrace();
        System.out.println("Erro");
        return null;
    }
}
    
    public static void closeConnection(Connection conn, PreparedStatement ps, ResultSet rs) throws CLTVDAOException {
    close(conn, ps, rs);
    }
    
    public static void closeConnection(Connection conn, PreparedStatement ps)
        throws CLTVDAOException {
    close(conn, ps, null);
    }
    
    public static void closeConnection(Connection conn)
        throws CLTVDAOException {
    close(conn, null, null);
    }
    
    private static void close(Connection conn, PreparedStatement ps, ResultSet rs)
        throws CLTVDAOException {
    try {
        if (rs != null) {
            rs.close();
        }
        if (ps != null) {
            ps.close();
        }
        if (conn != null) {
            conn.close();
        }
    } catch (Exception e) {
        throw new CLTVDAOException(e.getMessage());
    }
    }
    
}
