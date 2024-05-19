1. 安裝 NodeJS
   1. [https://](https://nodejs.org/en/download/current)
2. 安裝 TypeScript
   1. npm install -g typescript
3. 安裝 Angular
   1. npm install -g @angular/cli@15
4. 假如從別的地方 Copy 專案裡面不含 node_modules 時, 直接在 workspace 資料夾執行 npm install, 會重新安裝

* 指令
  * ng new project_name: 直接創建一個 project (但是每次建立一個都會下載一個 node_modules)
  * ng new workspace_name --create_application false: 創建一個 workspace (多個 project 共用同一個 node_modules)
  * ng g app project_name --routing -S -s: 在 workspace 建立 project
    * --routing: 要 routing 功能
    * -S, -s: 不用產生 unit test 程式
  * ng g c component_name --project project_name: 在 project_name 新增 component 
  * ng g cl model_name --project project_name: 在 project_name 建立與後端資料溝通的模型 model_name
  * ng serve project_name -o: 啟動服務
  * 

* Attribute vs. Property
  * Attribute 是 HTML 的屬性, 例如: <div type = "text">
  * Property 是 DOM object 的屬性, 例如 div.type

* 當npm不能使用的時候
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -scope CurrentUser

https://drive.google.com/drive/folders/1-1VYcI_WEmc7-VmorNtDDXcDTnGbOeHZ?usp=drive_link
http://10.0.1.200:5050/

* 問題
  1. 用 constructor 跟不用的差別
  2. 變數加上 public 的差別
  3. App, Component 定位差異
  4. <router-outlet></router-outlet> 是固定用法? 還是像是 component selector 一樣哪裡可以設定?
  5. img src="{{picURL}}" 是去呼叫 HTML 自己原生的 attribute? img [src]="picURL" 是都使用 Angular 的 property?
