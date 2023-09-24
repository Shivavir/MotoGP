using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Mail;

namespace Moto_GP.App_Code
{
    public class SendEmail
    {
        string myemail = "motogpindia2023@gmail.com";
        string mailpass = "";
        public bool SendMyEmail(string SendTo, string Subject, string Message)
        {
            try
            {
                //Setting my email address
                MailAddress fromemail = new MailAddress(myemail, "Moto_GP");
                MailMessage msg = new MailMessage();
                msg.To.Add(SendTo);
                msg.From = fromemail;
                msg.Subject = Subject;
                msg.Body = Message;
                msg.Sender = fromemail;
                //Setting my credentials and protocols...
                SmtpClient client = new SmtpClient();
                NetworkCredential nc = new NetworkCredential(myemail, mailpass);
                client.UseDefaultCredentials = false;
                client.Credentials = nc;
                client.Port = 587;
                client.Host = "smtp.gmail.com";
                client.EnableSsl = true;
                client.Send(msg);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public int GenerateOTP()
        {
            Random r = new Random();
            int code = r.Next(1000, 9999);
            return code;
        }
    }
}