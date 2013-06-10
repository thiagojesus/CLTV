/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;

/**
 *
 * @author thiagojesus
 */
public class CLTVDAOException extends Exception {
    public CLTVDAOException(){ }
            public CLTVDAOException(String arg){
                    super(arg);
            }

            public CLTVDAOException(Throwable arg){
                    super(arg);
            }

            public CLTVDAOException(String arg,Throwable arg1){
                    super(arg,arg1);
            }
}
