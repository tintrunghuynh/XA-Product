import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef, Mutation } from "apollo-angular";
import gql from "graphql-tag";
// import { User } from 'src/app/Models/Client/user';
import { ActivatedRoute, Router } from "@angular/router";

const userQuery = gql`
        query user($userId: String){
            user(id: $userID){
                _id
                email
                name
                status
                createdDate
            }
        }
    `;

const deleteUser = gql`
        mutation removeUserById($id: String!){
            removeUserById(id: $id){
                _id
            }
        }
    `;
export interface User {

    _id: string;
    name: string;
    email: string;

}

@Component({
    selector: "app-client-register-component",
    templateUrl: "./register-component.component.html",
})
export class RegisterComponent implements OnInit {
    // // ************* */
    // displayedColumns: string[] = ['_id', 'email', 'name'];

    data = [];
    // resp: any = {};
    isLoadingResults = true;
    // // ************* */



    // // ************* */

    user: { _id: string, name: string, email: string };
    isLoadingResultsSaD = true;
    // respSaD: any = {};
    // private query: QueryRef<any>;
    // ************* */
    constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        // // Get all users
        // this.apollo.query({
        //     query: gql`{ users { _id, email, name } }`
        // }).subscribe(res => {
        //     this.resp = res;
        //     this.data = this.resp.data.users;
        //     console.log(this.data);
        //     this.isLoadingResults = false;
        // });

        // //
        // this.getUserDetails();
    }

    // getUserDetails() {
    //     const id = this.route.snapshot.params.id;
    //     this.query = this.apollo.watchQuery({
    //         query: userQuery,
    //         variables: { userId: id }
    //     });

    //     this.query.valueChanges.subscribe(res => {
    //         this.user = res.data.user;
    //         console.log(this.user);
    //         this.isLoadingResultsSaD = false;
    //     });
    // }

    deleteUser() {
        this.isLoadingResultsSaD = true;
        const userId = this.route.snapshot.params.id;
        this.apollo.mutate({
            mutation: deleteUser,
            variables: {
                id: userId
            }
        }).subscribe(({ data }) => {
            console.log("Got Data", data);
            this.isLoadingResultsSaD = false;
            this.router.navigate(["/users"]);
        }, (error) => {
            console.log("There was an error sending the query", error);
            this.isLoadingResultsSaD = false;
        });
    }
}
