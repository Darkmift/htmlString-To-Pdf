const path = require('path');

module.exports = ({
    name,
    name1,
    price1,
    price11,
    receiptId,
    count,
    count1,
    desc,
    desc1,
    tohwo,
    aram,
    payby,
},fullUrl) => {
    const today = new Date();
    var asOf = new Date();
    var year = asOf.getFullYear();
    var month = asOf.getMonth();
    var desiredDate = new Date(year, month + 1, 1);
    desiredDate.setDate(desiredDate.getDate() - 1);
    return /*html */ `
    <html>
    <head>
        <meta charset="utf-8">
        <title>קבלה לתשלום</title>
        <style>
            

    .clearfix:after {
        content: "";
        display: table;
        clear: both;
    }
    .sideright{
        text-align: right;
    }
    a {
        color: #5D6975;
        text-decoration: underline;
    }
    
    body {
        position: relative;
        width: 19cm;  
        height: 29cm; 
        margin: 0 auto; 
        color: #001028;
        background: #FFFFFF; 
        font-family: Arial, sans-serif; 
        font-size: 12px; 
        font-family: Arial;
    }
    
    header {
        padding: 10px 0;
        margin-bottom: 30px;
    }
    
    #logo {
        text-align: center;
        margin-bottom: 10px;
    }
    
    
    #logo img {
        width: 90px;
    }
    .cup{
        width: 130px;
        height:130px;
    }
    h1 {
        border-top: 1px solid  #5D6975;
        border-bottom: 1px solid  #5D6975;
        color: #5D6975;
        font-size: 2.4em;
        line-height: 1.4em;
        font-weight: normal;
        text-align: center;
        margin: 0 0 20px 0;
        background: url(dimension.png);
    }
    
    #project {
        float: right;
    }
    .pb-4{
        margin-bottom:4px;
    }
    #project span {
        color: #5D6975;
        text-align: left;
        width: 52px;
        margin-right: 10px;
        display: inline-block;
        font-size: 0.8em;
    }
    
    #company {
        float: right;
        text-align: right;
        font-size: 0.9rem;
    }
    #company1 {
        float: right;
        text-align: right;
        font-size: 0.9rem;
    }
    
    #project div,
    #company div {
        white-space: nowrap; 
            
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;
    }
    
    table tr:nth-child(2n-1) td {
        background: #F5F5F5;
    }
    
    table th,
    table td {
        text-align: center;
    }
    
    table th {
        padding: 5px 20px;
        color: #5D6975;
        border-bottom: 1px solid #C1CED9;
        white-space: nowrap;        
        font-weight: normal;
    }
    
    table .service,
    table .desc {
        text-align: right;
    }
    
    table td {
        padding: 20px;
        text-align: left;
    }
    
    table td.service,
    table td.desc {
        vertical-align: top;
    }
    
    table td.unit,
    table td.qty,
    table td.total {
        font-size: 1.2em;
    }
    .a{
    text-align: center;
    }
    table td.grand {
        border-top: 1px solid #5D6975;;
    }
    
    #notices .notice {
        color: #5D6975;
        font-size: 1.2em;
    }
    
    footer {
        color: #5D6975;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #C1CED9;
        padding: 8px 0;
        text-align: center;
    }
        </style>    
    </head>
    <body>
        <header class="clearfix">
        <div id="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97lVGQipaie103YFllycfTHsMmUp9iixgPQ&usqp=CAU">
        </div>
        <img class="cup" src="https://mezuza-house.herokuapp.com/images/JO.png">
        <img class="cup" src="${fullUrl}/images/kitty.jpg">
        <h1>קבלה :${receiptId}</h1>
        <div class="sideright">  
            <h3>בכר שניאור הזנת תוכן לאתרים<br>ויצמן 13/15 קריית מלאכי</h3>
        </div>
        <div id="company" class="clearfix">
            <div class="pb-4"><b>קבלה מספר ${receiptId}</b></div>
            <div class="pb-4"><b>עוסק פטור:</b>  313127250</div>
            <div class="pb-4">${`${today.getDate()}. ${
                today.getMonth() + 1
            }. ${today.getFullYear()}.`}  <b>:תאריך תשלום</b></div>

        </div>
        </header>
        <main>
        <div  class="a">
        <h2>לכבוד:   &nbsp ${tohwo}</h2>
        <h4> ת.ז/עמ  &nbsp ${aram}</h4>
        <br>
        </div>
        <table>
            <thead>
            <tr>
                <th>סה''כ</th>
                <th>כמות</th>
                <th>מחיר</th>
                <th class="desc">תיאור</th>
                <th class="service">שירות</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="total">₪${parseInt(price1) * parseInt(count)}</td>
                <td class="qty">${count}</td>
                <td class="unit">₪${price1}</td>
                <td class="desc">${desc}</td>
                <td class="service">${name}</td>
            </tr>
            ${
                price11
                    ? `<tr>
                <td class="total">₪${parseInt(price11) * parseInt(count1)}</td>
                <td class="qty">${count1}</td>
                <td class="unit">₪${price11}</td>
                <td class="desc">${desc1}</td>
                <td class="service">${name1}</td>
            </tr>`
                    : ''
            }
            
            <tr>
                <td class="total">₪${
                    price11
                        ? parseInt(price1) * parseInt(count) +
                          parseInt(price11) * parseInt(count1)
                        : parseInt(price1) * parseInt(count)
                }</td>
                <td colspan="4">סך הכל</td>
            </tr>
            <tr>
                <td >פטור</td>
                <td class="total">0%</td>
                <td colspan="4">מע''מ</td>
            </tr>
            <tr>
                <td class="grand total"> ₪${
                    price11
                        ? parseInt(price1) * parseInt(count) +
                          parseInt(price11) * parseInt(count1)
                        : parseInt(price1) * parseInt(count)
                }
                </td>
                <td colspan="4" class="grand total">סה"כ שולם</td>
            </tr>
            </tbody>
        </table>
        <div class="a"><b>582-237620 :הופקד לחשבון</b></div><div class="a"><b>שולם באמצעות: ${payby}</b></div>
        <p class="a">תשלום עבור חשבון עסקה ${receiptId}</p>
        <div id="company1" class="clearfix">
            <div ><h4>:חשבון לתשלום</h4></div>
            <div class="pb-4"><b>בנק הפועלים 12</b></div>
            <div class="pb-4"><b>מספר סניף 582</b></div>
            <div class="pb-4"><b>מספר חשבון 237620</b></div>
            <br>
            <div>
                <b>
                ___________:חתימה
                </b>
            </div>
        </div>
        </main>
        <footer>
            סוֹף דָּבָר הַכֹּל נִשְׁמָע אֶת הָאֱלֹהִים יְרָא וְאֶת מִצְו‍ֹתָיו שְׁמוֹר כִּי זֶה כָּל הָאָדָם.
        </footer>
    </body>
    </html>

        `;
};
