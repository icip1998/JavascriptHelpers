export function check_array_key(array, key, output = null) {
  if (array !== null) {
    if (array[key] !== undefined) {
      return array[key]
    }
  }
  if (output !== null) {
    return output
  }
  return ''
}

export function check_same_value(val, val2) {
  if (val === val2) {
    return true
  }
  return false
}

export function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i]
    }
  }
  return null
}

export function getRomawi(key) {
  switch (key) {
    case "1":
      return "I"
      break;
    case "2":
      return "II"
      break;
    case "3": 
      return "III"
      break;
    case "4":
      return "IV"
      break;
    case "5": 
      return "V"
      break;
    case "6":
      return "VI"
      break;
    case "7":
      return "VII" 
      break;
    case "8":
      return "VIII" 
      break; 
    case "8":
      return "VIII" 
      break; 
    case "9":
      return "IX" 
      break; 
    case "10":
      return "X" 
      break; 
    case "11":
      return "XI" 
      break; 
    case "12":
      return "XII" 
      break; 
    default:
      return ""
      break;
  }
}

export function getPenyebut(bilangan){
  var kalimat="";
  var angka   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
  var kata    = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');
  var tingkat = new Array('','Ribu','Juta','Milyar','Triliun');
  var panjang_bilangan = bilangan.length;
  
  /* pengujian panjang bilangan */
  if(panjang_bilangan > 15){
    kalimat = "Diluar Batas";
  }else{
    /* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
    for(i = 1; i <= panjang_bilangan; i++) {
      angka[i] = bilangan.substr(-(i),1);
    }
  
    var i = 1;
    var j = 0;
    
    /* mulai proses iterasi terhadap array angka */
    while(i <= panjang_bilangan){
      var subkalimat = "";
      var kata1 = "";
      var kata2 = "";
      var kata3 = "";
      
      /* untuk Ratusan */
      if(angka[i+2] != "0"){
        if(angka[i+2] == "1"){
          kata1 = "Seratus";
        }else{
          kata1 = kata[angka[i+2]] + " Ratus";
        }
      }
      
      /* untuk Puluhan atau Belasan */
      if(angka[i+1] != "0"){
        if(angka[i+1] == "1"){
          if(angka[i] == "0"){
            kata2 = "Sepuluh";
          }else if(angka[i] == "1"){
            kata2 = "Sebelas";
          }else{
            kata2 = kata[angka[i]] + " Belas";
          }
        }else{
          kata2 = kata[angka[i+1]] + " Puluh";
        }
      }
      
      /* untuk Satuan */
      if (angka[i] != "0"){
        if (angka[i+1] != "1"){
          kata3 = kata[angka[i]];
        }
      }
      
      /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
      if ((angka[i] != "0") || (angka[i+1] != "0") || (angka[i+2] != "0")){
        subkalimat = kata1+" "+kata2+" "+kata3+" "+tingkat[j]+" ";
      }
      
      /* gabungkan variabe sub kalimat (untuk Satu blok 3 angka) ke variabel kalimat */
      kalimat = subkalimat + kalimat;
      i = i + 3;
      j = j + 1;
    }
    
    /* mengganti Satu Ribu jadi Seribu jika diperlukan */
    if ((angka[5] == "0") && (angka[6] == "0")){
      kalimat = kalimat.replace("Satu Ribu","Seribu");
    }
  }
  return kalimat
}

export function formatRupiah(angka, prefix = 'Rp. '){
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah     	= split[0].substr(0, sisa),
  ribuan     	= split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if(ribuan){
    var separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}
