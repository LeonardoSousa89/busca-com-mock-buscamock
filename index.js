let doc = document
doc.onclick = addEventListener('click',(e)=>e.preventDefault())

function buscar() {
    const url         = './db.json'

    let produto    = doc.querySelector('#produto')
    let quantidade = doc.querySelector('#quantidade')
    let cor        = doc.querySelector('#cor')
    let preco      = doc.querySelector('#preco')

    let area        = doc.querySelector('.area')
    let buscador    = doc.querySelector('#buscador')

                fetch(url)
                .then(response => response.json())
                .then(response =>{
                    response.map(e=>{
                        
                       if(!buscador.value || buscador.value === ''){
                            let msg = 'O campo deve ser diferente de vazio!'
                            createData(area,msg,'h1','empty')
                       }else if(buscador.value === e.produto){
                            let produtoJs = JSON.stringify(e.produto)
                            createData(produto,produtoJs,'ul','creation')

                            let quantidadeJs = JSON.stringify(e.quantidade)
                            createData(quantidade,quantidadeJs,'ul','creation')

                            let corJs = JSON.stringify(e.cor)
                            createData(cor,corJs,'ul','creation')

                            let precoJs = JSON.stringify(e.preco)
                            createData(preco,precoJs,'ul','creation')
                       }

                    })
                })
                .catch(err => console.log(err))

}

function createData(positioned, el, Object,type){
    if(type === 'err' || type === 'empty'){
        positioned.innerHTML = el 
    }else if(type === 'creation'){
        let obj = doc.createElement(`${Object}`)
        obj.innerHTML = el 
        positioned.append(obj) 
    }
}

function limpar(){
    doc.location.reload()
}