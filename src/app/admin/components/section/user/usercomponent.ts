import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef, Mutation } from "apollo-angular";
import gql from "graphql-tag";
import { User } from "src/app/Models/Adm/user";
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

@Component({
    selector: "app-adm-user-component",
    templateUrl: "./user.component.html",
})
export class AdmUserComponent implements OnInit {
    // ************* */
    displayedColumns: string[] = ["_id", "email", "name"];

    data: User[] = [];
    resp: any = {};
    isLoadingResults = true;
    // ************* */



    // ************* */
    user: User = {
        _id: "",
        name: "",
        email: ""
    };
    isLoadingResultsSaD = true;
    respSaD: any = {};
    private query: QueryRef<any>;
    // ************* */
    constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        // Get all users
        this.apollo.query({
            query: gql`{ users { _id, email, name } }`
        }).subscribe(res => {
            this.resp = res;
            this.data = this.resp.data.users;
            console.log(this.data);
            this.isLoadingResults = false;
        });

        //
        this.getUserDetails();
    }

    getUserDetails() {
        // const id = this.route.snapshot.params.id;
        // this.query = this.apollo.watchQuery({
        //     query: userQuery,
        //     variables: { userId: id }
        // });

        // this.query.valueChanges.subscribe(res => {
        //     this.user = res.data.user;
        //     console.log(this.user);
        //     this.isLoadingResultsSaD = false;
        // });
    }

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
