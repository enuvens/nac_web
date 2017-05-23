/* Configuração do datepicker para portugues */
jQuery(function($){
        $.datepicker.regional['pt-BR'] = {
                closeText: 'Fechar',
                prevText: '&#x3c;Anterior',
                nextText: 'Pr&oacute;ximo&#x3e;',
                currentText: 'Hoje',
                monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
                'Jul','Ago','Set','Out','Nov','Dez'],
                dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
                dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
                dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
                weekHeader: 'Sm',
                dateFormat: 'dd/mm/yy',
                firstDay: 0,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});

/* datepicker */
$( function() {
  $( "#checkin" ).datepicker();
  $( "#checkout" ).datepicker();
});

/* validação do formulario da home */
function ValidaFormReserva(frm){

  var dt_entrada = frm.checkin.value;
  var dt_saida = frm.checkout.value;

  if(frm.checkin.value == "Checkin" || frm.checkin.value == null) {
    frm.checkin.focus();
    return false;
  }
  if(frm.checkout.value == "Checkout" || frm.checkout.value == null) {
    frm.checkout.focus();
    return false;
  }
  dt_entrada = dt_entrada.replace("/", "");
  dt_entrada = dt_entrada.replace("/", "");

  dt_saida = dt_saida.replace("/", "");
  dt_saida = dt_saida.replace("/", "");

  if (dt_saida < dt_entrada){
    alert("A data de checkout deve ser maior que a data de checkin!");
    frm.checkout.focus();
    return false;
  }

  if(frm.adulto.value == "0") {
    frm.adulto.focus();
    return false;
  }

  if(frm.crianca.value == "0" || frm.crianca.value == null) {
    frm.crianca.focus();
    return false;
  }

  return true;
}

function LimpaAvisos(){
  document.getElementById('login_erro').style = 'display: none';
  document.getElementById('email').style = 'border: 0px';
  document.getElementById('senha').style = 'border: 0px';
}

function ValidaLogin(frm){
  if(frm.email.value == "" || frm.email.value == null) {
    frm.email.focus();
    document.getElementById('login_erro').style = 'display: inline';
    document.getElementById('email').style = 'border: 1px solid #FF0000';
    return false;
  }
  if(frm.senha.value == "" || frm.senha.value == null) {
    frm.senha.focus();
    document.getElementById('login_erro').style = 'display: inline';
    document.getElementById('senha').style = 'border: 1px solid #FF0000';
    return false;
  }

  if (frm.email.value == "user@area.com" && frm.senha.value == "123456"){
    return true;
  } else {
    document.getElementById('login_erro').style = 'display: inline';
    return false;
  }
}

/* validação do formulario de contato */
function ValidaContato(frm){

  if(frm.nome.value == "" || frm.nome.value == null) {
    frm.nome.focus();
    document.getElementById('erro_nome').style = "display: inline;";
    document.getElementById('nome').style = "border: 1px solid #FF0000;";
    return false;
  }
  if(frm.email.value == "" || frm.email.value == null || frm.email.value.indexOf('@')==-1 || frm.email.value.indexOf('.')==-1 ) {
    frm.email.focus();
    document.getElementById('erro_email').style = "display: inline;";
    document.getElementById('email').style = "border: 1px solid #FF0000;";
    return false;
  }
  if (frm.duvida.value.length < 50){
    frm.duvida.focus();
    document.getElementById('erro_duvida').style = "display: inline;";
    document.getElementById('duvida').style = "border: 1px solid #FF0000;";
    return false;
  }
}

/* Valida Busca */
function ValidaBusca(frm){

  if(frm.busca.value == "" || frm.busca.value == null) {
    frm.busca.focus();
    document.getElementById('busca').style = "border: 1px solid #FF0000;";
    return false;
  }
}

/* Trabalhando com Query String */
function urlDecode(string, overwrite){
  if(!string || !string.length){
    return {};
  }
  var obj = {};
  var pairs = string.split('&');
  var pair, name, value;
  var lsRegExp = /\+/g;
  for(var i = 0, len = pairs.length; i < len; i++){
    pair = pairs[i].split('=');
    name = unescape(pair[0]);
    value = unescape(pair[1]).replace(lsRegExp, " ");
    if(overwrite !== true){
      if(typeof obj[name] == "undefined"){
        obj[name] = value;
      }else if(typeof obj[name] == "string"){
        obj[name] = [obj[name]];
        obj[name].push(value);
      }else{
        obj[name].push(value);
      }
    }else{
      obj[name] = value;
    }
  }
  return obj;
}

function getVar(param){
  var wl = window.location.href;
  var params = urlDecode(wl.substring(wl.indexOf("?")+1));
  return(params[param]);
}
