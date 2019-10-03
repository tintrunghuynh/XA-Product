import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm, FormBuilder, FormControl } from "@angular/forms";
import { Apollo, Query } from "apollo-angular";
import * as Queries from "./adm-interface-specification-queries";
import { Message } from "../../Message";
import { PubSub } from "graphql-subscriptions";
import { Subscription, Subject } from "rxjs";
import { Observable } from "rxjs";
@Injectable({
    providedIn: "root"
})
export class AdmInterfaceSpecificationServices implements OnDestroy {
    private querySubscription: Subscription;
    private listSubscription: Subscription[] = [];
    loading: boolean;
    resp: any = [];
    query: any;
    pubsub = new PubSub();
    constructor(private apollo: Apollo, private router: Router) {
    }

    isNameExists(nameCheck: string) {
        return new Promise((resolve, reject) => {
            this.querySubscription = this.apollo.query({
                query: Queries.isNameExistsQuery,
                variables: {
                    name: nameCheck
                }
            }).subscribe(({ data }: any) => {
                console.log(data);
                resolve(data.isNameInterfaceSpecificationExists);
            }, (error) => {
                console.log(error);
                reject(Message.errorMsg("ERR_SERVER_SIDE_PLEASE_CONTACT"));
            });
            this.listSubscription.push(this.querySubscription);
        });
    }
    isNameExistsOnUpdate(idCheck: string, nameCheck: string) {
        return new Promise((resolve, reject) => {
            this.querySubscription = this.apollo.query({
                query: Queries.isNameExistsOnUpdateQuery,
                variables: {
                    id: idCheck,
                    name: nameCheck
                }
            }).subscribe(({ data }: any) => {
                console.log(data);
                resolve(data.isNameInterfaceSpecificationExistsOnUpdate);
            }, (error) => {
                console.log(error);
                reject(Message.errorMsg("ERR_SERVER_SIDE_PLEASE_CONTACT"));
            });
            this.listSubscription.push(this.querySubscription);
        });
    }

    create(form: NgForm) {
        const Data = form.value;
        return new Promise((resolve, reject) => {
            this.apollo.mutate({
                mutation: Queries.createMutation,
                variables: {
                    name: Data.name,
                    category: Data.category,
                    specifications: Data.specifications,
                    descriptions: Data.descriptions,
                    status: Data.status
                }
            }).subscribe(({ data }: any) => {
                console.log(data);
                const resp = data.createInterfaceSpecification;
                resolve(resp);
            }, (error) => {
                console.log(error);
                reject(Message.errorMsg("ERR_SERVER_SIDE_PLEASE_CONTACT"));
            });
        });
    }

    update(form: NgForm) {
        const Data = form.value;
        return new Promise((resolve, reject) => {
            this.apollo.mutate({
                mutation: Queries.updateMutation,
                variables: {
                    id: Data.id,
                    name: Data.name,
                    category: Data.category,
                    specifications: Data.specifications,
                    descriptions: Data.descriptions,
                    status: Data.status
                },
            }).subscribe(({ data }: any) => {
                console.log(data);
                const resp = data.updateInterfaceSpecification;
                resolve(resp);
            }, ({ error }) => {
                console.log(error);
                reject(Message.errorMsg("ERR_SERVER_SIDE_PLEASE_CONTACT"));
            });
        });
    }

    getDetails(idObj: string) {
        console.log(`Service getDetails {id: ${idObj}}`);
        return new Promise((resolve, reject) => {
            this.apollo.watchQuery({ // using mutation for fetch latest data
                query: Queries.detailsQuery,
                variables: { id: idObj }
            }).valueChanges.subscribe(({ data, loading }: any) => {
                console.log("value Change");
                this.loading = loading;
                resolve(data.getInterfaceSpecification);
            }, (error) => {
                console.log(error);
                reject(Message.errorMsg("ERR_SERVER_SIDE_PLEASE_CONTACT"));
            });
        });
    }

    // getDetailsSubscription(idObj: string) {
    //     console.log(`Service getDetails {id: ${idObj}}`);
    //     return new Promise((resolve, reject) => {
    //         this.apollo.watchQuery({
    //             query: Queries.detailsQuery,
    //             variables: { id: idObj }
    //         }).valueChanges.subscribe(({ data }: any) => {
    //             console.log(data);
    //             resolve(data.getInterfaceSpecification);
    //         }, (error) => {
    //             console.log(error);
    //             reject(Message.errorMsg("ERR_SERVER_SIDE_PLEASE_CONTACT"));
    //         });
    //     });

    // }

    // .subscribe(({ data }) => {
    //     console.log(data);
    // }, (error) => {
    //     throw new Error(`\nThere was an error sending the query: ${error}`);
    // });


    ngOnDestroy(): void {
        console.log("adm-interface-specification.service ngOnDestroy()");
        // if (this.querySubscruption) {
        //     this.querySubscruption.unsubscribe();
        // }
    }
}
