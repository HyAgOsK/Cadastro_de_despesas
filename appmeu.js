
//local storage é permanente no host local

//session storage é permanente durante a instancia do navegador caso feche ele fechara também

//indexDB 

//web SQL JSON

//Cookies backend


//classe despesa
class Despesa{
	constructor(ano,mes,dia,tipo,descricao,valor){
		this.ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor

	}
}
class Bd{

	constructor(){
		let id = localStorage.getItem('id')

		if(id === null){
			localStorage.setItem('id',0)
		}

	}
	getProximoId(){
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId)+1
	}

	gravar(d){
		let id = this.getProximoId()
		localStorage.setItem(id,JSON.stringify(d))
		localStorage.setItem('id',id)
	}

	//objeto do browser
	
	//preciso passar o objeto d = despesa com notacao JSON, com isso colocamos JSON.stringify(d)

	//todos objetos serao sobrescritos, assim devemos deixar um registro para cada um deles
	localStorage.setItem('despesa',JSON.stringify(d))

	//novamente precisamos converter esse objeto JSON em objeto literal e salvar estes ao poucos

	//indice dinamico

}


let bd = new Bd()


function cadastrarDespesa(){
	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	

	//criacao do objeto
	let despesa = new Despesa(
		ano.value,
		mes.value,
		dia.value,
		tipo.value,
		descricao.value,
		valor.value
	)		

	bd.gravar(despesa)
}


