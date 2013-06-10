// JavaScript Document
//função para limpar o campo pelo id recebido
function logado(){
	var log = false;
	var nomeUsuario = "";
	
	if(log == true){
		document.getElementById('logado').innerHTML=nomeUsuario;
		document.getElementById('login').style.zIndex ="-1";
		document.getElementById('cabecalho').style.zIndex ="0";
		document.getElementById('logado').style.zIndex ="1";
	}else{
		document.getElementById('login').style.zIndex ="1";
		document.getElementById('cabecalho').style.zIndex ="0";
		document.getElementById('logado').style.zIndex ="-1";		
	}
}

function limpa_campo(id){
	document.getElementById(id).value = "";
}

//função que cria mascara para  data
function mascara_data(data, nomedata){
	  var mydata = ''; //inicializa mydata
	  mydata = mydata + data; //incrementa mydata com as entradas recebidas
	  if (mydata.length == 2){//se o tamanho de mydata for igual a 2, altera o value do campo
		  mydata = mydata + '/'; 
		  document.getElementById(nomedata).value = mydata; 
	  } 
	  if (mydata.length == 5){ //se o tamanho de mydata for igual a 5, altera o value do campo
		  mydata = mydata + '/'; 
		  document.getElementById(nomedata).value = mydata; 
	  } 
	  if (mydata.length == 10){ 
		  verifica_data(nomedata); 
	  } 
} 

//função verifica se a data é valida
function verifica_data (id) { 
	if(data == ""){
		   document.getElementById(id).src="alert.gif";
		   document.getElementById(id).title="Campo obrigatorio!";
	}
	//quebra o valor do campo recebido em dia, mes e ano
	var dia = (document.getElementById(id).value.substring(0,2)); 
	var mes = (document.getElementById(id).value.substring(3,5)); 
	var ano = (document.getElementById(id).value.substring(6,10)); 

	var situacao = ""; 
	
	// verifica o dia valido para cada mes 
	if ((dia < 01)||(dia < 01 || dia > 30) && (  mes == 04 || mes == 06 || mes == 09 || mes == 11 ) || dia > 31) { 
		situacao = "falsa"; 
	} 

	// verifica se o mes e valido 
	if (mes < 01 || mes > 12 ) { 
		situacao = "falsa"; 
	} 

	// verifica se e ano bissexto 
	if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4)))) { 
		situacao = "falsa"; 
	} 

	if (document.getElementById(id).value == "") { 
		situacao = "falsa"; 
	} 

	if (situacao == "falsa") {
		alert("Data inválida!"); 
		document.getElementById(id).focus(); 
		document.getElementById('imgdata').src="error.gif"; 
		document.getElementById('imgdata').title="Data inexistente!";
	}else{
		document.getElementById('imgdata').src="ok.gif";
	}
} 

//verifica se a data 2 é maior ou igual a data 1
function verificaBuscaData(){
		//quebra o valor do campo recebido em dia, mes e ano
	var dia1 = (document.getElementById('data1').value.substring(0,2)); 
	var mes1 = (document.getElementById('data1').value.substring(3,5)); 
	var ano1 = (document.getElementById('data1').value.substring(6,10));
	var dia2 = (document.getElementById('data2').value.substring(0,2)); 
	var mes2 = (document.getElementById('data2').value.substring(3,5)); 
	var ano2 = (document.getElementById('data2').value.substring(6,10));
			
	if(ano2<ano1) { 
		alert("A data limite é menor que a data inicial!");
		document.getElementById(data2).focus(); 
	}
	if(ano2==ano1 && mes2<mes1) { 
		alert("A data limite é menor que a data inicial!"); 
		document.getElementById(data2).focus(); 
	} 
	if(ano2==ano1 && mes2==mes1 && dia2<dia1){
		alert("A data limite é menor que a data inicial!"); 
		document.getElementById(data2).focus(); 
	}
		 
}


function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
function rtrim(texto) { return texto.replace(/[ ]+$/, ''); }
function trim(texto) { return ltrim(rtrim(texto)); }//combinação de funções retirados dos slides de aula para limpar expaços em branco no começo e no final

//recebe o texto inserido e o id do textfild para limpar espaços no começo e no fim
function arruma_entrada(texto, id){
	var texto_limpo = trim(texto);
	document.getElementById(id).value = texto_limpo;
		
}

function validaNome(nome,id){//inicia e termina com caracter alfanumerico, aceitando acentos
var er = /^[a-zA-ZÀ-Üà-ü]+$/;
       if(nome == ""){
		   document.getElementById(id).src="alert.gif";
		   document.getElementById(id).title="Campo obrigatorio!";
       }else if(er.test(nome) == false){
		   document.getElementById(id).src="error.gif"; 
		   document.getElementById(id).title="Insira apenas seu primeiro nome!";
       }
	   if(er.test(nome)==true){
		   document.getElementById(id).src="ok.gif";
	   }
}

function validaSNome(nome,id){
var er = /^[a-zA-ZÀ-Üà-ü ]+$/;//inicia e termina com caracter alfanumerico, aceitando acentos, e permite espaço para nome composto.
       if(nome == ""){
		   document.getElementById(id).src="alert.gif";
		   document.getElementById(id).title="Campo obrigatorio!";
       }else if(er.test(nome) == false){
		   document.getElementById(id).src="error.gif"; 
		   document.getElementById(id).title="Insira apenas caracters";
       }
	   if(er.test(nome)==true){
		   document.getElementById(id).src="ok.gif";
	   }
}

function validaEmail(mail, id){
var er = /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/;
       if(mail == ""){
		         document.getElementById(id).src="alert.gif"; 
				 document.getElementById(id).title="Campo obrigatorio!";         
       }else if(er.test(mail) == false){
		         document.getElementById(id).src="error.gif";
				 document.getElementById(id).title="Formato de email desconhecido!";
       }
	   if(er.test(mail)==true){
		   document.getElementById(id).src="ok.gif";  
	   }	   
}

function verificaEmail(email2, id){
var	email = document.getElementById('email').value;
	if(email != email2){
		document.getElementById(id).src="error.gif";
		document.getElementById(id).title="Endereço de email não confere!";
	}else{
		document.getElementById(id).src="ok.gif";
		global++;
	}
	if(email2==""){
		document.getElementById(id).src="alert.gif";
		document.getElementById(id).title="Campo obrigatorio!";
	}
}

function validaSenha(senha,id){
var er = /^[a-z]{5}[1-9]{3}$/;
       if(senha == ""){
		   document.getElementById(id).src="alert.gif";
		   document.getElementById(id).title="Campo obrigatorio!";
       }else if(er.test(senha) == false){
		   document.getElementById(id).src="error.gif"; 
		   document.getElementById(id).title="A senha deve ser 5 letras, seguidas de 3 numeros!";
       }
	   if(er.test(senha)==true){
		   document.getElementById(id).src="ok.gif";
	   }
}

function verificaSenha(senha2, id){
var	senha = document.getElementById('senha').value;
	if(senha2==""){
		document.getElementById(id).src="alert.gif";
		document.getElementById(id).title="Campo obrigatorio!";
	}else if(senha!=senha2){
		document.getElementById(id).src="error.gif";
		document.getElementById(id).title="As senhas não conferem!";
		
	}else{
		document.getElementById(id).src="ok.gif";
	}
	
}

