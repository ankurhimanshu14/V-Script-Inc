import React, {Component} from 'react';
import Button from '../../components/useButton';

export default class LogOut extends Component {

    logout() {
        document.cookie
        .split(";")
        .forEach((c) => {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(/=.*/, "=;expires=" + new Date(0) + ";path=/");
          });
          window.location.href = "/users/login";
    }
    render() {
        return(
            <Button
            id="logout"
            variant="danger"
            feature="flex"
            type="submit"
            title="Logout"
            onClick={this.logout}
            />
        )
    }
}