

import javax.swing.*;
import java.awt.*;

public class Spiderman{
    public static void main(String[] args){
        
        JFrame frame = new JFrame("Login");
        frame.setLayout(new GridLayout(3, 2, 10, 10));
        frame.setSize(300, 150);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);

        JTextField userField = new JTextField();
        JPasswordField passField = new JPasswordField();
        JButton loginBtn = new JButton("Login");

        frame.add(new JLabel(" Username: "));
        frame.add(userField);
        frame.add(new JLabel(" Password: "));
        frame.add(passField);
        frame.add(new JLabel(""));
        frame.add(loginBtn);

        loginBtn.addActionListener(e -> {
            String user = userField.getText();
            String pass = new String(passField.getPassword());

            if (user.equals("admin") && pass.equals("1234")){
                JOptionPane.showMessageDialog(frame, "Welcome :)");
            }else{
                JOptionPane.showMessageDialog(frame, "Wrong username or password (._.)");
            }
        });
        frame.setVisible(true);
    }
}