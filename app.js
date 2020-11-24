const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const puppeteer = require('puppeteer');
const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/carro', async (req, res, next) => {


    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();


    const qualquerUrl = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl);


    const marca = await page.evaluate(() => {
        return document.querySelector('.makeName').innerText;
    });

    const qualquerUrl1 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl1);


    const modelo = await page.evaluate(() => {
        return document.querySelector('.modelName').innerText;
    });


    const qualquerUrl2 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl2);

    const ano = await page.evaluate(() => {
        return document.querySelector('.modelYear').innerText;
    });


    const qualquerUrl3 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl3);


    const ptotal = await page.evaluate(() => {
        return document.querySelector('.title-big').innerText;
    });

    const qualquerUrl4 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl4);


    const ptdetalhada = await page.evaluate(() => {
        
        itens = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens;
    });


    const qualquerUrl5 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl5);


    const valor = await page.evaluate(() => {
        return document.querySelector('.font-bold').innerText;
    });

    const qualquerUrl6 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl6);


    const ptdetalhada1 = await page.evaluate(() => {
        
        itens1 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens1[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens1;
    });

    const qualquerUrl7 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl7);


    const ptdetalhada2 = await page.evaluate(() => {
        
        itens2 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens2[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens2;
    });

    const qualquerUrl8 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl8);


    const ptdetalhada3 = await page.evaluate(() => {
        
        itens3 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens3[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens3;
    });

    const qualquerUrl9 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl9);


    const ptdetalhada4 = await page.evaluate(() => {
        
        itens4 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens4[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens4;
    });

    const qualquerUrl10 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl10);


    const ptdetalhada5 = await page.evaluate(() => {
        
        itens5 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens5[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens5;
    });

    const qualquerUrl11 = `https://www.icarros.com.br/volkswagen/up/opiniao-do-dono`;
    await page.goto(qualquerUrl11);


    const ptdetalhada6 = await page.evaluate(() => {
        
        itens6 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens6[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens6;
    });

    // PT2

    const qualquerUrl12 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl12);


    const marca1 = await page.evaluate(() => {
        return document.querySelector('.makeName').innerText;
    });

    const qualquerUrl13 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl13);


    const modelo1 = await page.evaluate(() => {
        return document.querySelector('.modelName').innerText;
    });


    const qualquerUrl14 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl14);

    const ano1 = await page.evaluate(() => {
        return document.querySelector('.modelYear').innerText;
    });


    const qualquerUrl15 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl15);


    const ptotal1 = await page.evaluate(() => {
        return document.querySelector('.title-big').innerText;
    });

    const qualquerUrl16 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl16);


    const ptdetalhada7 = await page.evaluate(() => {
        
        itens = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens;
    });


    const qualquerUrl17 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl17);


    const valor1 = await page.evaluate(() => {
        return document.querySelector('.font-bold').innerText;
    });

    const qualquerUrl18 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl18);


    const ptdetalhada8 = await page.evaluate(() => {
        
        itens1 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens1[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens1;
    });

    const qualquerUrl19 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl19);


    const ptdetalhada9 = await page.evaluate(() => {
        
        itens2 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens2[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens2;
    });

    const qualquerUrl20 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl20);


    const ptdetalhada10 = await page.evaluate(() => {
        
        itens3 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens3[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens3;
    });

    const qualquerUrl21 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl21);


    const ptdetalhada11 = await page.evaluate(() => {
        
        itens4 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens4[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens4;
    });

    const qualquerUrl22 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl22);


    const ptdetalhada12 = await page.evaluate(() => {
        
        itens5 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens5[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens5;
    });

    const qualquerUrl23 = `https://www.icarros.com.br/fiat/argo/opiniao-do-dono`;
    await page.goto(qualquerUrl23);


    const ptdetalhada13 = await page.evaluate(() => {
        
        itens6 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens6[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens6;
    });

    // PT3

    const qualquerUrl24 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl24);


    const marca2 = await page.evaluate(() => {
        return document.querySelector('.makeName').innerText;
    });

    const qualquerUrl25 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl25);


    const modelo2 = await page.evaluate(() => {
        return document.querySelector('.modelName').innerText;
    });


    const qualquerUrl26 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl26);

    const ano2 = await page.evaluate(() => {
        return document.querySelector('.modelYear').innerText;
    });


    const qualquerUrl27 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl27);


    const ptotal2 = await page.evaluate(() => {
        return document.querySelector('.title-big').innerText;
    });

    const qualquerUrl28 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl28);


    const ptdetalhada14 = await page.evaluate(() => {
        
        itens = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens;
    });


    const qualquerUrl29 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl29);


    const valor2 = await page.evaluate(() => {
        return document.querySelector('.font-bold').innerText;
    });

    const qualquerUrl30 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl30);


    const ptdetalhada15 = await page.evaluate(() => {
        
        itens1 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens1[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens1;
    });

    const qualquerUrl31 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl31);


    const ptdetalhada16 = await page.evaluate(() => {
        
        itens2 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens2[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens2;
    });

    const qualquerUrl32 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl32);


    const ptdetalhada17 = await page.evaluate(() => {
        
        itens3 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens3[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens3;
    });

    const qualquerUrl33 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl33);


    const ptdetalhada18 = await page.evaluate(() => {
        
        itens4 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens4[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens4;
    });

    const qualquerUrl34 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl34);


    const ptdetalhada19 = await page.evaluate(() => {
        
        itens5 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens5[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens5;
    });

    const qualquerUrl35 = `https://www.icarros.com.br/toyota/etios-hatch/opiniao-do-dono`;
    await page.goto(qualquerUrl35);


    const ptdetalhada20 = await page.evaluate(() => {
        
        itens6 = {}
        document.querySelectorAll('.grade-box__grade').forEach(e => {
            itens6[e.children[2].innerText] = e.children[0].innerText
            
        });
        return itens6;
    });


    await browser.close();



    // retorna os dados
    return res.send({ ok: true, marca, modelo, ano, ptotal, ptdetalhada, valor, 
        ptdetalhada1, ptdetalhada2, ptdetalhada3, ptdetalhada4, ptdetalhada5, ptdetalhada6,  
        marca1, modelo1, ano1, ptotal1, ptdetalhada7, valor1, 
        ptdetalhada8, ptdetalhada9, ptdetalhada10, ptdetalhada11, ptdetalhada12, ptdetalhada13,  
        marca2, modelo2, ano2, ptotal2, ptdetalhada14, valor2, 
        ptdetalhada15, ptdetalhada16, ptdetalhada17, ptdetalhada18, ptdetalhada19, ptdetalhada20,  });
});

app.get('/api/v1/carro1', async (req, res1, next) => {


    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    

    const qualquerUrl = `https://www.icarros.com.br/volkswagen/up`;
    await page.goto(qualquerUrl);


    const marca = await page.evaluate(() => {
        return document.querySelector('.makeName').innerText;
    });

    const qualquerUrl1 = `https://www.icarros.com.br/volkswagen/up`;
    await page.goto(qualquerUrl1);


    const modelo = await page.evaluate(() => {
        return document.querySelector('.modelName').innerText;
    });
    
    const qualquerUrl2 = `https://www.icarros.com.br/volkswagen/up`;
    await page.goto(qualquerUrl2);


    const nota = await page.evaluate(() => {
        return document.querySelector('.price-results__rate').innerText;
    });
    // p2

    const qualquerUrl3 = `https://www.icarros.com.br/fiat/argo`;
    await page.goto(qualquerUrl3);


    const marca1 = await page.evaluate(() => {
        return document.querySelector('.makeName').innerText;
    });

    const qualquerUrl4 = `https://www.icarros.com.br/fiat/argo`;
    await page.goto(qualquerUrl4);


    const modelo1 = await page.evaluate(() => {
        return document.querySelector('.modelName').innerText;
    });
    
    const qualquerUrl5 = `https://www.icarros.com.br/fiat/argo`;
    await page.goto(qualquerUrl5);


    const nota1 = await page.evaluate(() => {
        return document.querySelector('.price-results__rate').innerText;
    });

    //P3

    const qualquerUrl6 = `https://www.icarros.com.br/toyota/etios-hatch`;
    await page.goto(qualquerUrl6);


    const marca2 = await page.evaluate(() => {
        return document.querySelector('.makeName').innerText;
    });

    const qualquerUrl7 = `https://www.icarros.com.br/toyota/etios-hatch`;
    await page.goto(qualquerUrl7);


    const modelo2 = await page.evaluate(() => {
        return document.querySelector('.modelName').innerText;
    });
    
    const qualquerUrl8 = `https://www.icarros.com.br/toyota/etios-hatch`;
    await page.goto(qualquerUrl8);


    const nota2 = await page.evaluate(() => {
        return document.querySelector('.price-results__rate').innerText;
    });
   
    await browser.close();



    // retorna os dados
    return res1.send({ ok: true, marca, modelo, nota, marca1, modelo1, nota1, marca2, modelo2, nota2 });
});
module.exports = app;
    
