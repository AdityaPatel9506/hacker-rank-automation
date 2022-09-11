const puppeteer = require('puppeteer');
const email = "bewovok916@bepureme.com";
const password = "123456";
// const log_link = ("https://www.hackerrank.com/auth/login");

(async function(){
    try{
        let browser_open_instence = await puppeteer.launch({headless:false,
            args:["--start-maximized"],defaultViewport :null});

            let new_tab = await browser_open_instence.newPage();
            await new_tab.goto(log_link)
            await new_tab.type("input[id='input-1']",email, {delay:50});
            await new_tab.type("input[type='password']",password, {delay:50});
            await new_tab.click("button[data-analytics='LoginPassword']");
            await wait_and_click('.topic-card a[data-attr1="algorithms"]',new_tab);
            await  wait_and_click('input[value = "warmup"]',new_tab);
            let all_challenges =  await new_tab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
            // console.log(all_challenges.length);
            await wait_and_click('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',new_tab)
            await question_solver(new_tab,all_challenges[1]);
        }
    catch(error){
        console.log("error");
    }
})()
async function wait_and_click(selector,current_page){
    await current_page.waitForSelector(selector);
    let selector_clicked = current_page.click(selector);
    return selector_clicked;
}


async function question_solver(page,question){
    await wait_and_click(".checkbox-input",page);
    await page.type('textarea.custominput',`#include<bits/stdc++.h>
    using namespace std;
    int main(){
        int size;
        cin>>size;
        int arr1[size-1];
        for (int i = 0; i < size; i++)
        {
            cin>>arr1[i];
        }
        
        int sum = accumulate(arr1,arr1+size,0);
        cout<<sum;
        return 0;
    
    }`,{delay:100});

    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("X");
   await page.keyboard.up("Control");
     await wait_and_click(".monaco-editor.no-user-select.vs",page);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
   await page.keyboard.press("Delete");    
     await page.keyboard.press("V");
     await wait_and_click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page)
 }
