// type heroi = {
//     name: string,
//     vulgo: string,
// };

// function printaObjeto(pessoa : heroi){
//     console.log(pessoa);
// }

// printaObjeto(
//     {
//     name: "Bruce Wayne",
//     vulgo: "Batma",
// }
// );

//Variaveis


//Tipos pimitivos: boolean, number, string
let ligado:boolean = false;
let nome:string = "Davi";
let idade:number = 30;
let altura:number = 1.90;


//number

//string


//null e //undefined <- Sao tipos especiais
let nulo:null = null;
let indefinido:undefined = undefined;

//tipos abrangentes: any, void
let retorno:void;
let retornoView:any = "Qualquer coisa(poder string, numero, ou void(vazio)"

//tipo Object(Objeto)

//objeto sem previsibilidade
let produto:object = {
    name : "felile",
    cidade : "sp",
    idade : 30,

};

//Objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number,
};

let meuProduto:ProdutoLoja = {
    nome:"Tênis",
    preco: 89.99,
    unidades:5,
}

//array
let dados:string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[] = ["felipe", 30, "davi",2547];

//Tuplas(É uma Array ordenada)
let boleto:[string,number,number] = ["Água", 200, 10 ]

/*arrays metodos*/
dados.