<<<<<<< HEAD
export class User{
    constructor(picture, name, email, dob, gender){
        this.picture = picture;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
    }    
}
=======

import EmailIcon from '@material-ui/icons/Email';
import CakeIcon from '@material-ui/icons/Cake';



const User = ({ user }) => {


    const mailHandler = () => {
        const currentMail = user.email.split('');
        currentMail.splice(3, 3, "...");
        const email = currentMail.join("");
        return email;
    }

    const dateHandler = () => {
        const date = new Date(user.dob.date).toDateString().split(" ");
        const dob = `${date[1]} ${date[2]} ${date[3]}`;
        return dob;
    }



    return (

        <div className="personCard" >
            <ul>
                <li>
                    <img src={user.picture.medium} alt={user.name.first} />
                    <div className="personInfo">
                        <p>{user.name.first} {user.name.last}</p>
                        <p><EmailIcon className="iconS" />{mailHandler()}</p>
                        <p><CakeIcon className="iconS" />{dateHandler()}</p>
                    </div>
                </li>
            </ul>
        </div >



    );
}

export { User };
>>>>>>> fe1f80b1a21148fbeafcfb388824405eaab164f3
