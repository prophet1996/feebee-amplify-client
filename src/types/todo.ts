export interface Todo{
    id:string,
    name:string,
    description:string,
    createdAt:string,
    updatedAt:string,
}

export interface TodoData {
    data:{
        listTodos:{items:Todo[]}
    }
}