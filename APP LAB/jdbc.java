import java.sql.*;

public class jdbc {
    public static void main(String[] args){
        Connection connection = null;
        try{

            //connection
            Class.forName("org.sqlite.JDBC");
            connection = DriverManager.getConnection("jdbc:sqlite:test.db");
            
            Statement statement = connection.createStatement();
            
            //creation
            String CreateSQL = "CREATE TABEL IF NOT EXIST Employee " + "(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INT)";
            statement.executeUpdate(CreateSQL);

            //insertion
            String Insert = "INSERT INTO Employees (name, age) VALUES ('Zoro', 20), ('Luffy', 19), ('Sanji', 22)";
            statement.executeUpdate(Insert);

            //query
            String query = "SELECT * FROM Employees";
            ResultSet resultset = statement.executeQuery(query);

            //display
            while(resultset.next()){
                int id = resultset.getInt("id");
                String name = resultset.getString("name");
                int age = resultset.getInt("age");
                System.out.println(id + name + age);
            }
        } catch (ClassNotFoundException | SQLException e){
            e.printStackTrace();
        }

        finally{
            try{
                if(connection != null){
                    connection.close();
                }
            } catch (SQLException e){
                e.printStackTrace();
            }
        }


    }
}


