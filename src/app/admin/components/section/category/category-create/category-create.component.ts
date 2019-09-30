import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
// import { GraphQLJSON  } from 'graphql-type-json';

import { Category } from 'src/app/Models/Adm/category';

const submitCategory = gql`
    mutation createCategory(
        $name: String!,
        $specifications: Object!,
        $status: String!) {
        createCategory(
            name: $name,
            specifications: $specifications,
            status: $status
            ) {
          _id
        }
    }
`;
@Component({
    selector: 'app-adm-category-create-component',
    templateUrl: './category-create.component.html'
})
export class AdmCategoryCreateComponent implements OnInit {
    // *********** //
    category: any = {   name:'',specifications: JSON.parse('')};
    resp: any = {};
    isLoadingResults = true;
    categoryForm: FormGroup;
    name = '';
    specificaton: JSON = JSON.parse('');
    status = 'create';


    // *********** //
    constructor(private apollo: Apollo, private router: Router, private formBuilder: FormBuilder) {

    }


    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        // this.isLoadingResults = true;
        // const bookData = form.value;
        // this.apollo.mutate({
        //     mutation: submitBook,
        //     variables: {
        //         isbn: bookData.isbn,
        //         title: bookData.title,
        //         author: bookData.author,
        //         description: bookData.description,
        //         publisher: bookData.publisher,
        //         published_year: bookData.publishedYear
        //     }
        // }).subscribe(({ data }) => {
        //     console.log('got data', data);
        //     this.isLoadingResults = false;
        //     this.router.navigate(['/books/detail/', data.addBook._id]);
        // }, (error) => {
        //     console.log('there was an error sending the query', error);
        //     this.isLoadingResults = false;
        // });
    }
}
