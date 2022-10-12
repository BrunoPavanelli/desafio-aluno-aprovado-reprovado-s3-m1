let nome = prompt("Nome do Aluno")
if (nome.length < 5) {
    alert("Valor Invalido")
} else {

    let presenca = prompt("Presença do Aluno")
    if ((presenca <= 0 ) && (presenca > 10)) {
        alert("Valor Invalido")
    } else {

        alert("Matematica:")
        let notaMatematica = parseFloat(prompt("Digite sua Nota"))
        if ((notaMatematica >= 0) && (notaMatematica > 10)) {
            alert("Valor Invalido")
        } else { 

            alert("Portugues:")
            let notaPortugues = parseFloat(prompt("Digite sua Nota"))
            if ((notaPortugues >= 0) && (notaPortugues > 10)) {
                alert("Valor Invalido")
            } else {

                alert("Informática:")
                let notaInformática = parseFloat(prompt("Digite sua Nota"))
                if ((notaInformática >= 0) && (notaInformática > 10)) {
                    alert("Valor Invalido")
                } else {

                    alert("Geografia:")
                    let notaGeografia = parseFloat(prompt("Digite sua Nota"))
                    if ((notaGeografia >= 0) && (notaGeografia > 10)) {
                        alert("Valor Invalido")
                    } else {

                        alert("Inglês:")
                        let notaInglês = parseFloat(prompt("Digite sua Nota"))
                        if ((notaInglês >= 0) && (notaInglês > 10)) {
                            alert("Valor Invalido")
                        } else {

                            alert("História:")
                            let notaHistória = parseFloat(prompt("Digite sua Nota"))
                            if ((notaHistória >= 0) && (notaHistória > 10)) {
                                alert("Valor Invalido")
                            } else {

                                alert("Filosofia:")
                                let notaFilosofia = parseFloat(prompt("Digite sua Nota"))
                                if ((notaFilosofia >= 0) && (notaFilosofia > 10)) {
                                    alert("Valor Invalido")
                                } else {

                                    alert("Sociologia:")
                                    let notaSociologia = parseFloat(prompt("Digite sua Nota"))
                                    if ((notaSociologia >= 0) && (notaSociologia> 10)) {
                                        alert("Valor Invalido")
                                    } else {

                                        alert("Literatura:")
                                        let notaLiteratura = parseFloat(prompt("Digite sua Nota"))
                                        if ((notaLiteratura >= 0) && (notaLiteratura > 10)) {
                                            alert("Valor Invalido")
                                        } else {

                                            alert("Educação Física:")
                                            let notaEducacaoFisica = parseFloat(prompt("Digite sua Nota"))
                                            if ((notaEducacaoFisica >= 0) && (notaEducacaoFisica > 10)) {
                                                alert("Valor Invalido")
                                            } else {
                                                alert("Valores Computados")
                                                
                                                let somaNotas = notaMatematica + notaPortugues + notaInformática + notaGeografia + notaInglês + notaHistória +
                                                notaFilosofia + notaSociologia + notaLiteratura + notaEducacaoFisica
                                                console.log(somaNotas)
                                                
                                                let mediaNotas = ((somaNotas) / 10)
                                                console.log(mediaNotas)
                                                
                                                alert("Resultados do Aluno")
                                                if ((presenca >= 6) && (mediaNotas >=8)) {
                                                    alert(`A nota do aluno ${nome} é de ${mediaNotas} e sua presença de ${presenca}: Aluno aprovado!`)
                                                }   else {
                                                    alertalert(`A nota do aluno ${nome} é de ${mediaNotas} e sua presença de ${presenca}: Aluno reprovado!`)
                                                }
                                            }    
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}





