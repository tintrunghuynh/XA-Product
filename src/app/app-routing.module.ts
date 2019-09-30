import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin/components/admin-component.component";

import { AdmInterfaceSpecComponent } from "./admin/components/section/interface-spec/interface-spec.component";
import { AdmInterfaceSpecCreateComponent } from "./admin/components/section/interface-spec/interface-spec-create/interface-spec-create.component";
import { AdmInterfaceSpecDetailsComponent } from "./admin/components/section/interface-spec/interface-spec-details/interface-spec-details.component";
import { AdmInterfaceSpecEditComponent } from "./admin/components/section/interface-spec/interface-spec-edit/interface-spec-edit.component";

import { AdmCategoryComponent } from "./admin/components/section/category/category.component";
import { AdmCategoryCreateComponent } from "./admin/components/section/category/category-create/category-create.component";
import { AdmCategoryDetailsComponent } from "./admin/components/section/category/category-details/category-details.component";
import { AdmCategoryEditComponent } from "./admin/components/section/category/category-edit/category-edit.component";



import { AdmProductComponent } from "./admin/components/section/product/product.component";
import { AdmCartComponent } from "./admin/components/section/cart/cart.component";


import { AdmUserComponent } from "./admin/components/section/user/usercomponent";
import { AdmUserCreateComponent } from "./admin/components/section/user/user-create/user-create.component";
import { AdmUserDetailsComponent } from "./admin/components/section/user/user-details/user-details.component";
import { AdmUserEditComponent } from "./admin/components/section/user/user-edit/user-edit.component";

const routes: Routes = [
    {
        path: "", component: AdminComponent, children: [
            {
                path: "interfaceSpecification", children: [
                    { path: "", component: AdmInterfaceSpecComponent },
                    { path: "create", component: AdmInterfaceSpecCreateComponent },
                    { path: "details/:_id", component: AdmInterfaceSpecDetailsComponent },
                    { path: "edit/:_id", component: AdmInterfaceSpecEditComponent },
                ]
            },
            {
                path: "category", children: [
                    { path: "", component: AdmCategoryComponent },
                    { path: "create", component: AdmCategoryCreateComponent },
                    { path: "details/:_id", component: AdmCategoryDetailsComponent },
                    { path: "edit", component: AdmCategoryEditComponent },
                ]
            },
            { path: "product", component: AdmProductComponent },
            {
                path: "user", children: [
                    { path: "", component: AdmUserComponent },
                    { path: "create", component: AdmUserCreateComponent },
                    { path: "details/:_id", component: AdmUserDetailsComponent },
                    { path: "edit", component: AdmUserEditComponent },
                ]
            },
            { path: "cart", component: AdmCartComponent },
        ]

    },
    {
        path: "admin",
        children: [
            {
                path: "", component: AdminComponent, children: [
                    {
                        path: "interfaceSpecification", children: [
                            { path: "", component: AdmInterfaceSpecComponent },
                            { path: "create", component: AdmInterfaceSpecCreateComponent },
                            { path: "details/:_id", component: AdmInterfaceSpecDetailsComponent },
                            { path: "edit/:_id", component: AdmInterfaceSpecEditComponent },
                        ]
                    },
                    {
                        path: "category", children: [
                            { path: "", component: AdmCategoryComponent },
                            { path: "create", component: AdmCategoryCreateComponent },
                            { path: "details/:_id", component: AdmCategoryDetailsComponent },
                            { path: "edit", component: AdmCategoryEditComponent },
                        ]
                    },
                    { path: "product", component: AdmProductComponent },
                    {
                        path: "user", children: [
                            { path: "", component: AdmUserComponent },
                            { path: "create", component: AdmUserCreateComponent },
                            { path: "details/:_id", component: AdmUserDetailsComponent },
                            { path: "edit", component: AdmUserEditComponent },
                        ]
                    },
                    { path: "cart", component: AdmCartComponent },
                ]
            },
        ]
    },
    {
        path: "**",
        redirectTo: "", pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
