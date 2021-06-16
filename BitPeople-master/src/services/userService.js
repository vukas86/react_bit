import { usersEndpoint } from "../shared/constants";
import { get } from "./APIService";
import { User } from "../entities/User";

class UserService {

    async fetchUsers() {
        return get(usersEndpoint)
            .then((response) => {
                const usersData = response.results;
                return usersData.map((user) => {
                    const picture = user.picture.large;
                    const gender = user.gender;
                    const name = nameHandler(user);
                    const email = mailHandler(user.email);
                    const dob = dateHandler(user.dob.date);
                    const myUser = new User(picture, name, email, dob, gender);
                    return myUser;
                })
            })
    }
}

const nameHandler = (user) => {
    const firstName = user.name.first[0].toUpperCase() + user.name.first.slice(1);
    const lastName = user.name.last[0].toUpperCase() + user.name.last.slice(1);
    const name = `${firstName} ${lastName}`;
    return name;
}

const mailHandler = (mail) => {
    const currentEmail = mail.split("@");
    currentEmail[0] = currentEmail[0].slice(0, 3) + "...";
    const email = currentEmail.join("@");
    return email;
}

const dateHandler = (myDate) => {
    let date = new Date(myDate).toDateString().split(" ");
    const dob = `${date[1]} ${date[2]} ${date[3]}`;
    return dob;
}

export const userService = new UserService();

