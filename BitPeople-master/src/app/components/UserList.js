import React, { Fragment } from 'react';
import { ListItem } from '../components/viewMode/ListItem';
import { GridItem } from '../components/viewMode/GridItem';
import { NoResults } from '../components/search/NoResults';
import { LoadingScreen } from '../components/LoadingScreen';


export const UserList = (props) => {


    const filterUsers = (users, value) => {

        const filterUsers = users.filter((user, index) => user.name.toLowerCase().includes(value.toLowerCase()));

        return filterUsers;
    }

    const renderListItem = (users) => {

        const myUsers = filterUsers(users, props.inputValue);

        if (!myUsers.length) {
            return <NoResults />;
        }

        return myUsers
            .map((user, index) => {
                return <ListItem key={index} user={user} pinkColor={props.pinkColor} />
            });
    }
    
    const myUsers = filterUsers(props.users, props.inputValue);

    const renderGridItem = (users) => {


        if (!myUsers.length) {
            return <NoResults />;
        }
    
        return myUsers
            .map((user, index) => {
                return <GridItem key={index} user={user} pinkColor={props.pinkColor} />
            });
    }

    const displayLayout = (users) => {

        const listView = localStorage.getItem("listView");

        if (!users.length) {
            return <LoadingScreen />
            
        }
        else if (listView === "true") {

            return renderListItem(props.users)
        }

        return renderGridItem(props.users)
    }

    const countPeople = (users) => {

        let male = 0;
        let female = 0;
        users.forEach((user) => {
            if (user.gender === "female") {
                female++;
            } else {
                male++;
            }
        });
        
        return (
            <div>
                Male : {male} Female : {female}
            </div>
        )
    }




    return (
        <Fragment>
            <div className="container">
                <div className="count-people"> {countPeople(myUsers)} </div>
                <div className="row">
                    {displayLayout(props.users)}
                </div>
            </div>
        </Fragment>
    );
}






