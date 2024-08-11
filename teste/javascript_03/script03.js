var name = prompt('Please enter a name');
        var idade = prompt('Please enter a age');
        var imgUrl = 'https://cdn.awsli.com.br/300x300/274/274010/produto/280770657/capacho-60x40cm-super-bem-vindo-azul-c80e19b9-lo739p44ax.jpg';
        
        console.log('Nome: ' + name + ' Idade: ' + idade);
        alert('Nome: ' + name + ' Idade: ' + idade);
        
        document.write(`<h1>Olá ${name}!</h1>`);
        document.write('<img src="' + imgUrl + '" alt="Imagem de Bem-Vindo">');