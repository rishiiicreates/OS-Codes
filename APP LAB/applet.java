import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


public class applet extends JApplet implements ActionListener{

    private JTextField nameField;
    private JTextField emailField;
    private JButton submitButton;

    @Override
    public void init(){
        setLayout(new GridLayout(3, 2));

        //creation
        JLabel nameLabel = new JLabel("Name:");
        nameField = new JTextField(20);
        JLabel emailLabel = new JLabel("Email:");
        emailField = new JTextField(20);
        submitButton = new Jbutton("Submit");
        submitButton.addActionListener(this);

        //adding
        add(nameLabel);
        add(nameField);
        add(emailLabel);
        add(emailField);
        add(new JLabel());
        add(submitButton);

    }

    @Override
    public void actionPerformed(ActionEvent e){
        if ( e.getSource() == submitButton){
            String name = nameField.getText();
            String email = emailField.getText();

            JOptionPane.showMessageDialog(this, "Name" + name + "email" + email + "Form submission: " JOptionPane.INFORMATION_MESSAGE);

            nameField.setText("");
            emailField.setText("");
        }
    }
    
}
