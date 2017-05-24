/*
  Validação do Formulário de cadastro
*/
function ValidaCadastro(frm){

  var msg = "";
  var valida = 0;

  if(frm.nome.value == "" || frm.nome.value == null) {
    frm.nome.focus();
    document.getElementById('e_nome').style = 'display: inline;';
    valida = 1;
    msg = "Você deve informar o nome.<br />";
  }
  if(frm.snome.value == "" || frm.snome.value == null) {
    if (valida == 0){
      frm.snome.focus();
    }
    document.getElementById('e_snome').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o sobrenome.<br />";
  }
  if(frm.sexo.value == "0") {
    if (valida == 0){
      frm.sexo.focus();
    }
    document.getElementById('e_sexo').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o sexo.<br />";
  }
  if(frm.email.value == "" || frm.email.value == null) {
    if (valida == 0){
      frm.email.focus();
    }
    document.getElementById('e_email').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o email.<br />";
  }
  if(frm.ddd.value == "" || frm.ddd.value == null) {
    if (valida == 0){
      frm.ddd.focus();
    }
    document.getElementById('e_ddd').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o ddd.<br />";
  }
  if(frm.telefone.value == "" || frm.telefone.value == null) {
    if (valida == 0){
      frm.telefone.focus();
    }
    document.getElementById('e_telefone').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o telefone.<br />";
  }
  if(frm.tipo_logradouro.value == "0") {
    if (valida == 0){
      frm.tipo_logradouro.focus();
    }
    document.getElementById('e_tipo_logradouro').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o tipo de logradouro.<br />";
  }
  if(frm.logradouro.value == "" || frm.logradouro.value == null) {
    if (valida == 0){
      frm.logradouro.focus();
    }
    document.getElementById('e_logradouro').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o logradouro.<br />";
  }
  if(frm.numero.value == "" || frm.numero.value == null) {
    if (valida == 0){
      frm.numero.focus();
    }
    document.getElementById('e_numero').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o numero.<br />";
  }
  if(frm.cep.value == "" || frm.cep.value == null) {
    if (valida == 0){
      frm.cep.focus();
    }
    document.getElementById('e_cep').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o CEP.<br />";
  }
  if(frm.bairro.value == "" || frm.bairro.value == null) {
    if (valida == 0){
      frm.bairro.focus();
    }
    document.getElementById('e_bairro').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o bairro.<br />";
  }
  if(frm.estado.value == "0") {
    if (valida == 0){
      frm.estado.focus();
    }
    document.getElementById('e_estado').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar o estado.<br />";
  }
  if(frm.cidade.value == "" || frm.cidade.value == null) {
    if (valida == 0){
      frm.cidade.focus();
    }
    document.getElementById('e_cidade').style = 'display: inline;';
    valida = 1;
    msg = msg + "Você deve informar a cidade.<br />";
  }

  document.getElementById("msg_erro").innerHTML = msg;
  document.getElementById('msg_erro').style = 'display: inline;';

  if (valida != 0){
    return false;
  } else {
    return true;
  }
}

/*
  Limpa os avisos da Tela (Apenas os *)
*/
function LimpaAviso(str){
  document.getElementById(str).style = 'display: none;';
}

/*
  Trabalhando com Query String
*/
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

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
