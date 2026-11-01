import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class swing extends JFrame implements ActionListener{
    
    
    private JTextField nameField;
    private JTextField emailField;
    private JButton SubmitButton;

    public swing(){

        //setdata
        setTitle("SpiderMan");
        setSize(320,160);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(3, 2, 5, 5));

        //make layout
        JLabel nameLabel = new JLabel("Name:");
        nameField = new JTextField(20);
        JLabel emailLabel = new JLabel("Email:");
        emailField = new JTextField(20);
        SubmitButton = new JButton("Submit");
        SubmitButton.addActionListener(this);

        //addlayout
        add(nameLabel);
        add(nameField);
        add(emailLabel);
        add(emailField);
        add(new JLabel(" "));
        add(SubmitButton);

        setLocationRelativeTo(null);
        setVisible(true);

    }

    @Override 
    public void actionPerformed(ActionEvent e){
        if ( e.getSource() == SubmitButton){
            String name = nameField.getText();
            String email = emailField.getText();

            JOptionPane.showMessageDialog(this, "Name: " + name + "\nEmail: " + email + "Form Submission", email, JOptionPane.INFORMATION_MESSAGE);

            nameField.setText(" ");
            emailField.setText(" ");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(swing::new);
    }
}
