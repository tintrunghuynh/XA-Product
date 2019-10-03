import gql from "graphql-tag";

export const isNameExistsQuery = gql`
    query ($name: String!){
        isNameInterfaceSpecificationExists(name: $name)
    }
`;

export const isNameExistsOnUpdateQuery = gql`
    query (
        $id: String,
        $name: String!
        ){
        isNameInterfaceSpecificationExistsOnUpdate(
            id: $id,
            name: $name)
    }
`;

export const detailsQuery = gql`
    query ($id: String!){
        getInterfaceSpecification(id: $id) {
            ok,
            message,
            data,
            errorMessage{
                message,
                fields,
            }
        }
    }
`;

export const detailsQuerySubscription = gql`
    subscription ($id: String!){
        interfaceSpecificationChanged(id: $id) {
            ok,
            message,
            data,
            errorMessage{
                message,
                fields,
            }
        }
    }
`;


export const createMutation = gql`
    mutation (
        $name: String!,
        $category: String!,
        $specifications: JSON!,
        $descriptions: String!,
        $status: String!)
    {
        createInterfaceSpecification(
            name:               $name,
            category:           $category
            specifications:     $specifications,
            descriptions:       $descriptions,
            status:             $status,
        ) {
            ok,
            message,
            data,
            errorMessage{
                message,
                fields,
            }
        }
    }
`;

export const updateMutation = gql`
    mutation (
        $id: String!,
        $name: String!,
        $category: String!,
        $specifications: JSON!,
        $descriptions: String!,
        $status: String!)
    {
        updateInterfaceSpecification(
            id:                 $id,
            name:               $name,
            category:           $category
            specifications:     $specifications,
            descriptions:       $descriptions,
            status:             $status,
        ) {
            ok,
            message,
            data,
            errorMessage{
                message,
                fields,
            }
        }
    }
`;
