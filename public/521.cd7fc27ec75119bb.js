"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[521],{7521:(He,q,s)=>{s.r(q),s.d(q,{HeroesModule:()=>qe});var m=s(6019),F=s(152),p=s(9133),u=s(4382),e=s(3668),w=s(8260),N=s(4522);let h=(()=>{class o{constructor(t){this.http=t,this.baseUrl=w.N.baseUrl}getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroesPorId(t){return this.http.get(`${this.baseUrl}/heroes/${t}`)}getSugerencias(t){return this.http.get(`${this.baseUrl}/heroes?q=${t}&_limit=5`)}agregarHeroe(t){return this.http.post(`${this.baseUrl}/heroes`,t)}actualizarHeroe(t){return this.http.put(`${this.baseUrl}/heroes/${t.id}`,t)}borrarHeroe(t){return this.http.delete(`${this.baseUrl}/heroes/${t}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(N.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var l=s(888),Z=s(5694),c=s(515),H=s(7964),g=s(86),d=s(9112);let v=(()=>{class o{transform(t,r=""){return t.id&&(t.alt_img||t.assets_img)?t.alt_img?r||t.alt_img:`assets/heroes/${t.id}.jpg`:"assets/no-image.png"}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=e.Yjl({name:"imagen",type:o,pure:!0}),o})();const k=["imagen"];function E(o,n){1&o&&(e.TgZ(0,"i"),e._uU(1,"Primera aparici\xf3n: "),e.qZA())}function Q(o,n){1&o&&e._UZ(0,"br")}function S(o,n){1&o&&e._UZ(0,"br")}function j(o,n){1&o&&(e.TgZ(0,"i"),e._uU(1,"Personajes: "),e.qZA())}const Y=function(o){return["/heroes",o]},B=function(o){return["/heroes/editar",o]};let O=(()=>{class o{imagenError(){this.imagenHeroe.nativeElement.src="assets/no-image.png"}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-heroe-tarjeta"]],viewQuery:function(t,r){if(1&t&&e.Gf(k,5),2&t){let a;e.iGM(a=e.CRH())&&(r.imagenHeroe=a.first)}},inputs:{heroe:"heroe"},decls:32,vars:22,consts:[["mat-card-image","",3,"src","error"],["imagen",""],[4,"ngIf"],[2,"margin-left","2px"],[2,"margin-top","-10px"],["mat-button","","color","accent",2,"border-radius","20px",3,"routerLink"],[1,"spacer"],["mat-button","","color","warn",2,"border-radius","20px",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"mat-card"),e.TgZ(1,"mat-card-header"),e.TgZ(2,"mat-card-title"),e._uU(3),e.ALo(4,"titlecase"),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6),e.ALo(7,"titlecase"),e.qZA(),e.qZA(),e.TgZ(8,"img",0,1),e.NdJ("error",function(){return r.imagenError()}),e.ALo(10,"imagen"),e.qZA(),e.TgZ(11,"mat-card-content"),e.TgZ(12,"h3"),e._uU(13),e.qZA(),e.TgZ(14,"p"),e.YNc(15,E,2,0,"i",2),e.TgZ(16,"span",3),e._uU(17),e.qZA(),e.YNc(18,Q,1,0,"br",2),e.YNc(19,S,1,0,"br",2),e.YNc(20,j,2,0,"i",2),e._uU(21),e.qZA(),e.qZA(),e.TgZ(22,"mat-card-actions",4),e.TgZ(23,"button",5),e.TgZ(24,"mat-icon"),e._uU(25,"add"),e.qZA(),e._uU(26," Leer m\xe1s... "),e.qZA(),e._UZ(27,"span",6),e.TgZ(28,"button",7),e.TgZ(29,"mat-icon"),e._uU(30,"edit"),e.qZA(),e._uU(31," Editar "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,12,r.heroe.superhero)," "),e.xp6(3),e.hij(" ",e.lcZ(7,14,r.heroe.alter_ego)," "),e.xp6(2),e.Q6J("src",e.lcZ(10,16,r.heroe),e.LSH),e.xp6(5),e.hij(" ",r.heroe.publisher," "),e.xp6(2),e.Q6J("ngIf",r.heroe.first_appearance),e.xp6(2),e.hij(" ",r.heroe.first_appearance," "),e.xp6(1),e.Q6J("ngIf",r.heroe.first_appearance&&r.heroe.characters),e.xp6(1),e.Q6J("ngIf",r.heroe.first_appearance&&r.heroe.characters),e.xp6(1),e.Q6J("ngIf",r.heroe.characters),e.xp6(1),e.hij(" ",r.heroe.characters," "),e.xp6(2),e.Q6J("routerLink",e.VKq(18,Y,r.heroe.id)),e.xp6(5),e.Q6J("routerLink",e.VKq(20,B,r.heroe.id)))},directives:[l.a8,l.dk,l.n5,l.$j,l.G2,l.dn,m.O5,l.hq,g.lW,u.rH,d.Hw],pipes:[m.rS,v],styles:["mat-card[_ngcontent-%COMP%]{margin-top:25px}"]}),o})();function R(o,n){1&o&&(e.TgZ(0,"div",5),e.TgZ(1,"p"),e.TgZ(2,"i"),e._uU(3," Disculpe las molestias, por el momento no podemos mostrarle el listado de heroes. Por favor intente nuevamente m\xe1s tarde."),e.qZA(),e.qZA(),e.qZA())}function P(o,n){1&o&&(e.TgZ(0,"div",6),e._UZ(1,"mat-spinner"),e.qZA())}function $(o,n){if(1&o&&(e.TgZ(0,"div",9),e._UZ(1,"app-heroe-tarjeta",10),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("heroe",t)}}function X(o,n){if(1&o&&(e.TgZ(0,"div",7),e.YNc(1,$,2,1,"div",8),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.heroes)}}let G=(()=>{class o{constructor(t){this.heroesService=t,this.error=!1,this.heroes=[]}ngOnInit(){this.heroesService.getHeroes().subscribe(t=>{this.error=!1,this.heroes=t},t=>{console.error(t),this.error=!0})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-listado"]],decls:11,vars:3,consts:[[1,"animate__animated","animate__fadeIn","animate__slow"],["fxLayout","row","fxLayoutAlign","center"],["fxFlex","50","style","border-radius: 20px;","class","alert alert-danger mt-4 animate__animated animate__flipInX animate__fast",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","style","margin-top: 200px; margin-bottom: 198px;",4,"ngIf","ngIfElse"],["divListado",""],["fxFlex","50",1,"alert","alert-danger","mt-4","animate__animated","animate__flipInX","animate__fast",2,"border-radius","20px"],["fxLayout","column","fxLayoutAlign","center center",2,"margin-top","200px","margin-bottom","198px"],["fxLayout","row wrap","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","20px",1,"animate__animated","animate__zoomIn"],["fxFlex","20","fxFlex.lg","15","fxFlex.sm","30",4,"ngFor","ngForOf"],["fxFlex","20","fxFlex.lg","15","fxFlex.sm","30"],[3,"heroe"]],template:function(t,r){if(1&t&&(e.TgZ(0,"mat-card",0),e.TgZ(1,"mat-card-header"),e.TgZ(2,"h1"),e._uU(3," Listado de H\xe9roes "),e.qZA(),e._UZ(4,"br"),e.qZA(),e._UZ(5,"mat-divider"),e.qZA(),e.TgZ(6,"div",1),e.YNc(7,R,4,0,"div",2),e.qZA(),e.YNc(8,P,2,0,"div",3),e.YNc(9,X,2,1,"ng-template",null,4,e.W1O)),2&t){const a=e.MAs(10);e.xp6(7),e.Q6J("ngIf",r.error),e.xp6(1),e.Q6J("ngIf",0===r.heroes.length&&!r.error)("ngIfElse",a)}},directives:[l.a8,l.dk,Z.d,c.xw,c.Wh,m.O5,c.yH,H.$g,c.SQ,m.sg,O],encapsulation:2}),o})();var C=s(9204),z=s(2411),f=s(5304);let W=(()=>{class o{constructor(t,r){this.dialogRef=t,this.data=r}cancelar(){this.dialogRef.close()}borrar(){this.dialogRef.close(!0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.so),e.Y36(f.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-confirmar"]],decls:16,vars:1,consts:[["mat-button","","color","warn",3,"click"],["mat-button","","color","accent",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1," \xbfEst\xe1 Seguro? "),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"p"),e._uU(4),e._UZ(5,"br"),e._uU(6," \xbfDesea continuar?\n"),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"button",0),e.NdJ("click",function(){return r.borrar()}),e.TgZ(9,"mat-icon"),e._uU(10,"delete"),e.qZA(),e._uU(11," Si, borrar "),e.qZA(),e.TgZ(12,"button",1),e.NdJ("click",function(){return r.cancelar()}),e.TgZ(13,"mat-icon"),e._uU(14,"close"),e.qZA(),e._uU(15," Cancelar "),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.hij(" Est\xe1 apunto de borrar a ",r.data.superhero," "))},directives:[g.lW,d.Hw],encapsulation:2}),o})(),b=(()=>{class o{constructor(t){this.dialogRef=t}cerrar(){this.dialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.so))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-rellenar-campos"]],decls:10,vars:0,consts:[["fxLayout",""],[1,"spacer"],["mat-button","","color","accent",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p"),e._uU(1," Por favor, rellene los siguientes campos para continuar: "),e._UZ(2,"br"),e._uU(3," Super H\xe9roe, Alter Ego, Habilidades y Editorial.\n"),e.qZA(),e.TgZ(4,"div",0),e._UZ(5,"span",1),e.TgZ(6,"button",2),e.NdJ("click",function(){return r.cerrar()}),e.TgZ(7,"mat-icon"),e._uU(8,"close"),e.qZA(),e._uU(9," Cerrar "),e.qZA(),e.qZA())},directives:[c.xw,g.lW,d.Hw],encapsulation:2}),o})();var x=(()=>{return(o=x||(x={})).DCComics="DC Comics",o.MarvelComics="Marvel Comics",x;var o})(),D=s(9632),T=s(7706),U=s(138),K=s(6400),A=s(2663),y=s(6731);const V=["imagen"];function ee(o,n){if(1&o&&(e.TgZ(0,"small",24),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(": ",e.lcZ(2,1,t.heroe.superhero)," ")}}function te(o,n){if(1&o&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.desc," ")}}function oe(o,n){1&o&&e._UZ(0,"span",26)}function re(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().borrarHeroe()}),e.TgZ(1,"mat-icon"),e._uU(2,"delete"),e.qZA(),e._uU(3," Borrar "),e.qZA()}}let L=(()=>{class o{constructor(t,r,a,i,_){this.heroesService=t,this.activatedRoute=r,this.router=a,this.snakBar=i,this.dialog=_,this.srcImg="",this.publishers=[{id:"DC Comics",desc:"DC - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}],this.heroe={superhero:"",alter_ego:"",first_appearance:"",characters:"",publisher:x.DCComics,habilities:"",alt_img:""}}ngOnInit(){!this.router.url.includes("editar")||this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.heroesService.getHeroesPorId(t))).subscribe(t=>{this.heroe=t})}buscar(){var t,r,a;0!==((null===(t=this.heroe.superhero)||void 0===t?void 0:t.trim().length)||0)&&0!==((null===(r=this.heroe.alter_ego)||void 0===r?void 0:r.trim().length)||0)&&0!==((null===(a=this.heroe.habilities)||void 0===a?void 0:a.trim().length)||0)?this.heroe.id?this.heroesService.actualizarHeroe(this.heroe).subscribe(i=>{this.router.navigate(["heroes/",i.id])}):this.heroesService.agregarHeroe(this.heroe).subscribe(i=>{this.router.navigate(["heroes/editar",i.id]),this.mostrarSnackBar("H\xe9roe creado con \xe9xito!")}):this.dialog.open(b)}borrarHeroe(){this.dialog.open(W,{width:"300px",panelClass:["dialogConfirm"],data:Object.assign({},this.heroe)}).afterClosed().pipe((0,C.w)(r=>r?this.heroesService.borrarHeroe(this.heroe.id):(0,z.of)(!1))).subscribe(r=>{!1!==r&&this.router.navigate(["heroes/listado"])})}imagenError(){this.imagenHeroe.nativeElement.src="assets/no-image.png"}mostrarSnackBar(t){this.snakBar.open(t,"Cerrar",{duration:2e3,panelClass:["snakBarGuardar"]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h),e.Y36(u.gz),e.Y36(u.F0),e.Y36(D.ux),e.Y36(f.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-agregar"]],viewQuery:function(t,r){if(1&t&&e.Gf(V,5),2&t){let a;e.iGM(a=e.CRH())&&(r.imagenHeroe=a.first)}},decls:57,vars:21,consts:[["fxLayout","row","fxLayoutGap","40px","fxLayout.xs","column",1,"animate__animated","animate__zoomIn","mt-3",2,"margin-left","10px","margin-bottom","42px"],["fxFlex","50","fxLayout","column"],[1,"mb-4"],["style","margin-left: -3px;",4,"ngIf"],["fxFLayout","row",2,"margin-left","8px"],["fxLayoutGap","20px"],["fxFlex","100","fxFlex.md","50","fxFlex.sm","43","color","accent"],["matInput","","type","text","autocomplete","off","required","",3,"ngModel","ngModelChange"],["fxFlex","100","fxFlex.sm","50","fxFlex.md","50","color","accent"],["fxFlex","100","color","accent",2,"margin-left","8px"],["matInput","","type","text","autocomplete","off",3,"ngModel","ngModelChange"],["required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","fotoUrl","autocomplete","off",3,"ngModel","ngModelChange"],["fxLayout","row",3,"fxLayoutAlign"],["mat-raised-button","",2,"border-radius","20px","width","35%",3,"color","click"],["mat-list-icon",""],["class","spacer",4,"ngIf"],["mat-raised-button","","color","warn","style","border-radius: 20px; width: 35%;",3,"click",4,"ngIf"],["fxFlex","50","fxFlex.sm","45"],[1,"mb-4",2,"margin-right","8px"],[2,"text-align","center","margin-right","8px"],[1,"animate__animated","animate__zoomIn",3,"src","error"],["imagen",""],[2,"margin-left","-3px"],[3,"value"],[1,"spacer"],["mat-raised-button","","color","warn",2,"border-radius","20px","width","35%",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"mat-card",2),e.TgZ(3,"mat-card-header"),e.TgZ(4,"h1"),e._uU(5),e.YNc(6,ee,3,3,"small",3),e.qZA(),e.qZA(),e._UZ(7,"mat-divider"),e.qZA(),e.TgZ(8,"div",4),e.TgZ(9,"div",5),e.TgZ(10,"mat-form-field",6),e.TgZ(11,"mat-label"),e._uU(12," Super H\xe9roe "),e.qZA(),e.TgZ(13,"input",7),e.NdJ("ngModelChange",function(i){return r.heroe.superhero=i}),e.qZA(),e.qZA(),e.TgZ(14,"mat-form-field",8),e.TgZ(15,"mat-label"),e._uU(16," Alter Ego "),e.qZA(),e.TgZ(17,"input",7),e.NdJ("ngModelChange",function(i){return r.heroe.alter_ego=i}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"mat-form-field",9),e.TgZ(19,"mat-label"),e._uU(20," Primera Aparici\xf3n "),e.qZA(),e.TgZ(21,"input",10),e.NdJ("ngModelChange",function(i){return r.heroe.first_appearance=i}),e.qZA(),e.qZA(),e.TgZ(22,"mat-form-field",9),e.TgZ(23,"mat-label"),e._uU(24," Personajes "),e.qZA(),e.TgZ(25,"input",10),e.NdJ("ngModelChange",function(i){return r.heroe.characters=i}),e.qZA(),e.qZA(),e.TgZ(26,"mat-form-field",9),e.TgZ(27,"mat-label"),e._uU(28," Habilidades "),e.qZA(),e.TgZ(29,"input",7),e.NdJ("ngModelChange",function(i){return r.heroe.habilities=i}),e.qZA(),e.qZA(),e.TgZ(30,"mat-form-field",9),e.TgZ(31,"mat-label"),e._uU(32,"Editorial"),e.qZA(),e.TgZ(33,"mat-select",11),e.NdJ("ngModelChange",function(i){return r.heroe.publisher=i}),e.YNc(34,te,2,2,"mat-option",12),e.qZA(),e.qZA(),e.TgZ(35,"mat-form-field",9),e.TgZ(36,"mat-label"),e._uU(37," Foto Url "),e.qZA(),e.TgZ(38,"input",13),e.NdJ("ngModelChange",function(i){return r.heroe.alt_img=i})("ngModelChange",function(i){return r.srcImg=i}),e.qZA(),e.qZA(),e._UZ(39,"br"),e.TgZ(40,"div",14),e.TgZ(41,"button",15),e.NdJ("click",function(){return r.buscar()}),e.TgZ(42,"mat-icon",16),e._uU(43),e.qZA(),e._uU(44),e.qZA(),e.YNc(45,oe,1,0,"span",17),e.YNc(46,re,4,0,"button",18),e.qZA(),e.qZA(),e.TgZ(47,"div",19),e.TgZ(48,"mat-card",20),e.TgZ(49,"mat-card-header"),e.TgZ(50,"h1"),e._UZ(51,"br"),e.qZA(),e.qZA(),e._UZ(52,"mat-divider"),e.qZA(),e.TgZ(53,"div",21),e.TgZ(54,"img",22,23),e.NdJ("error",function(){return r.imagenError()}),e.ALo(56,"imagen"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.hij(" ",r.heroe.id?"Editar H\xe9roe":"Nuevo h\xe9roe"," "),e.xp6(1),e.Q6J("ngIf",r.heroe.superhero),e.xp6(7),e.Q6J("ngModel",r.heroe.superhero),e.xp6(4),e.Q6J("ngModel",r.heroe.alter_ego),e.xp6(4),e.Q6J("ngModel",r.heroe.first_appearance),e.xp6(4),e.Q6J("ngModel",r.heroe.characters),e.xp6(4),e.Q6J("ngModel",r.heroe.habilities),e.xp6(4),e.Q6J("ngModel",r.heroe.publisher),e.xp6(1),e.Q6J("ngForOf",r.publishers),e.xp6(4),e.Q6J("ngModel",r.heroe.alt_img)("ngModel",r.srcImg),e.xp6(2),e.Q6J("fxLayoutAlign",r.heroe.id?"":"center"),e.xp6(1),e.Q6J("color",r.heroe.id?"accent":"primary"),e.xp6(2),e.hij(" ",r.heroe.id?"edit":"library_add"," "),e.xp6(1),e.hij(" ",r.heroe.id?"Editar":"Guardar"," "),e.xp6(1),e.Q6J("ngIf",r.heroe.id),e.xp6(1),e.Q6J("ngIf",r.heroe.id),e.xp6(8),e.Q6J("src",e.xi3(56,18,r.heroe,r.srcImg),e.LSH))},directives:[c.xw,c.SQ,c.yH,l.a8,l.dk,m.O5,Z.d,T.KE,T.hX,U.Nt,p.Fj,p.Q7,p.JJ,p.On,K.gD,m.sg,c.Wh,g.lW,d.Hw,A.Nh,y.ey],pipes:[v,m.rS],styles:["img[_ngcontent-%COMP%]{width:400px;max-width:100%;border-radius:20px;box-shadow:4px 4px 4px 5px #00000036,4px 4px 4px 4px #0000003d;height:500px}"]}),o})();var M=s(7216);function ne(o,n){if(1&o&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.superhero," ")}}function ae(o,n){1&o&&(e.TgZ(0,"mat-option",14),e.TgZ(1,"i"),e._uU(2," Sin resultados "),e.qZA(),e.qZA())}let ie=(()=>{class o{constructor(t,r){this.heroesService=t,this.router=r,this.termino="",this.heroes=[],this.sinResultados=!1}buscarSugerencias(){this.termino.trim().length>0&&this.heroesService.getSugerencias(this.termino).subscribe(t=>{this.heroes=t,this.sinResultados=0===this.heroes.length}),0===this.termino.length&&(this.heroes=[])}mostrarHeroe(t){t.option.value&&this.router.navigate([`/heroes/${t.option.value.id}`])}limpiarSugerencias(){setTimeout(()=>{this.heroes=[]},390),this.termino=""}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-buscar"]],decls:24,vars:4,consts:[["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center",1,"animate__animated","animate__bounceInDown"],["fxFlex.lg","38","fxFlex.md","45","fxFlex.gt-md","45","fxFlex.sm","58"],[1,"mt-2"],[2,"margin-top","10px"],[2,"margin-left","16px"],[1,"example-form"],["color","accent",1,"inpt-width"],["type","text","name","buscador","matInput","",3,"ngModel","matAutocomplete","ngModelChange","input","blur"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],[1,"mat-background","mt-2"],[3,"value"],["value",""]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"mat-card"),e.TgZ(4,"mat-card-header"),e.TgZ(5,"mat-card-title"),e._uU(6," Buscador de H\xe9roes "),e.qZA(),e.TgZ(7,"mat-card-subtitle",3),e._uU(8," Seleccion\xe1 a tu h\xe9roe "),e.qZA(),e._UZ(9,"br"),e.qZA(),e._UZ(10,"mat-divider"),e.qZA(),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"mat-card",2),e.TgZ(13,"mat-card-content",4),e.TgZ(14,"form",5),e.TgZ(15,"mat-form-field",6),e.TgZ(16,"mat-label"),e._uU(17,"Buscar..."),e.qZA(),e.TgZ(18,"input",7),e.NdJ("ngModelChange",function(i){return r.termino=i})("input",function(){return r.buscarSugerencias()})("blur",function(){return r.limpiarSugerencias()}),e.qZA(),e.TgZ(19,"mat-autocomplete",8,9),e.NdJ("optionSelected",function(i){return r.mostrarHeroe(i)}),e.YNc(21,ne,2,2,"mat-option",10),e.YNc(22,ae,3,0,"mat-option",11),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(23,"mat-card",12),e.qZA(),e.qZA(),e.qZA()),2&t){const a=e.MAs(20);e.xp6(18),e.Q6J("ngModel",r.termino)("matAutocomplete",a),e.xp6(3),e.Q6J("ngForOf",r.heroes),e.xp6(1),e.Q6J("ngIf",r.sinResultados&&r.termino.length>0)}},directives:[c.xw,c.Wh,c.yH,l.a8,l.dk,l.n5,l.$j,Z.d,l.dn,p._Y,p.JL,p.F,T.KE,T.hX,U.Nt,p.Fj,M.ZL,p.JJ,p.On,M.XC,m.sg,m.O5,y.ey],styles:[".mat-background[_ngcontent-%COMP%]{background-color:#5dcebc!important;height:55px}.inpt-width[_ngcontent-%COMP%]{width:60%}"]}),o})();var J=s(6167);const se=["imagen"];function le(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",5),e.TgZ(1,"div",6),e.TgZ(2,"p"),e.TgZ(3,"i"),e._uU(4," No se ha encontrado un h\xe9roe con el id ingresado. Por favor regrese al listado de h\xe9roes o al buscador y seleccione un nuevo h\xe9roe."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"button",7),e.NdJ("click",function(){return e.CHM(t),e.oxw().irListado()}),e.TgZ(6,"mat-icon"),e._uU(7,"style"),e.qZA(),e._uU(8," Regresar al listado "),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return e.CHM(t),e.oxw().irBuscador()}),e.TgZ(10,"mat-icon"),e._uU(11,"search"),e.qZA(),e._uU(12," Regresar al buscador "),e.qZA(),e.qZA()}}function ce(o,n){1&o&&(e.TgZ(0,"div",8),e.TgZ(1,"p"),e.TgZ(2,"i"),e._uU(3," Disculpe las molestias, por el momento no podemos mostrarle el h\xe9roe seleccionado. Por favor intente nuevamente m\xe1s tarde.."),e.qZA(),e.qZA(),e.qZA())}function me(o,n){1&o&&(e.TgZ(0,"mat-grid-list",9),e.TgZ(1,"mat-grid-tile"),e._UZ(2,"mat-spinner"),e.qZA(),e.qZA())}function pe(o,n){1&o&&(e.TgZ(0,"div",23),e._UZ(1,"mat-spinner"),e.qZA())}function ue(o,n){if(1&o&&(e.TgZ(0,"p",24),e.TgZ(1,"i"),e._uU(2," Primera aparici\xf3n: "),e.qZA(),e.TgZ(3,"span",25),e._uU(4),e.ALo(5,"titlecase"),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(4),e.hij(" ",e.lcZ(5,1,t.heroe.first_appearance),". ")}}function ge(o,n){if(1&o&&(e.TgZ(0,"p",24),e.TgZ(1,"i"),e._uU(2," Personajes: "),e.qZA(),e.TgZ(3,"span",25),e._uU(4),e.ALo(5,"titlecase"),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(4),e.hij(" ",e.lcZ(5,1,t.heroe.characters),". ")}}function de(o,n){if(1&o&&(e.TgZ(0,"p",24),e.TgZ(1,"i"),e._uU(2," Editorial: "),e.qZA(),e.TgZ(3,"span",25),e._uU(4),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(4),e.hij(" ",t.heroe.publisher,". ")}}function _e(o,n){if(1&o&&(e.TgZ(0,"p",24),e.TgZ(1,"i"),e._uU(2," Alter Ego: "),e.qZA(),e.TgZ(3,"span",25),e._uU(4),e.ALo(5,"titlecase"),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(4),e.hij(" ",e.lcZ(5,1,t.heroe.alter_ego),". ")}}function he(o,n){if(1&o&&(e.TgZ(0,"p",24),e.TgZ(1,"i"),e._uU(2," Habilidades: "),e.qZA(),e.TgZ(3,"span",25),e._uU(4),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(4),e.hij(" ",t.heroe.habilities,". ")}}function Ze(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"div",12),e.TgZ(2,"mat-card"),e.TgZ(3,"mat-card-header"),e.TgZ(4,"mat-card-title"),e._uU(5),e.ALo(6,"titlecase"),e.qZA(),e.TgZ(7,"mat-card-subtitle"),e._uU(8),e.ALo(9,"titlecase"),e.qZA(),e.qZA(),e._UZ(10,"mat-divider"),e.qZA(),e.TgZ(11,"div",13),e.YNc(12,pe,2,0,"div",14),e.TgZ(13,"img",15,16),e.NdJ("load",function(){return e.CHM(t),e.oxw(2).onLoadImg()})("error",function(){return e.CHM(t),e.oxw(2).imagenError()}),e.ALo(15,"imagen"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",17),e.TgZ(17,"mat-card"),e.TgZ(18,"mat-card-header"),e.TgZ(19,"mat-card-title"),e._uU(20),e.qZA(),e._UZ(21,"br"),e._UZ(22,"br"),e._UZ(23,"br"),e.qZA(),e._UZ(24,"mat-divider"),e.qZA(),e.TgZ(25,"div",18),e.TgZ(26,"mat-card"),e.TgZ(27,"mat-card-header"),e._UZ(28,"mat-divider"),e.qZA(),e.TgZ(29,"mat-card-content"),e._UZ(30,"br"),e.YNc(31,ue,6,3,"p",19),e.YNc(32,ge,6,3,"p",19),e.YNc(33,de,5,1,"p",19),e.YNc(34,_e,6,3,"p",19),e.YNc(35,he,5,1,"p",19),e.qZA(),e._UZ(36,"mat-divider"),e.qZA(),e.qZA(),e.TgZ(37,"div",18),e.TgZ(38,"mat-card",20),e.TgZ(39,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).irListado()}),e.TgZ(40,"mat-icon"),e._uU(41,"style"),e.qZA(),e._uU(42," Ir al listado "),e.qZA(),e.TgZ(43,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).irBuscador()}),e.TgZ(44,"mat-icon"),e._uU(45,"search"),e.qZA(),e._uU(46," Ir al buscador "),e.qZA(),e.TgZ(47,"button",22),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).irEditar()}),e.TgZ(48,"mat-icon"),e._uU(49,"edit"),e.qZA(),e._uU(50," Ir a editar "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw(2);e.xp6(5),e.hij(" ",e.lcZ(6,11,t.heroe.superhero)," "),e.xp6(3),e.hij(" ",e.lcZ(9,13,t.heroe.alter_ego)," "),e.xp6(4),e.Q6J("ngIf",!t.imgLoad),e.xp6(1),e.Q6J("hidden",!t.imgLoad)("src",e.lcZ(15,15,t.heroe),e.LSH),e.xp6(7),e.hij(" ",t.heroe.publisher," "),e.xp6(11),e.Q6J("ngIf",t.heroe.first_appearance),e.xp6(1),e.Q6J("ngIf",t.heroe.characters),e.xp6(1),e.Q6J("ngIf",t.heroe.publisher),e.xp6(1),e.Q6J("ngIf",t.heroe.alter_ego),e.xp6(1),e.Q6J("ngIf",t.heroe.habilities)}}function fe(o,n){if(1&o&&e.YNc(0,Ze,51,17,"div",10),2&o){const t=e.oxw();e.Q6J("ngIf",!t.error)}}let xe=(()=>{class o{constructor(t,r,a){this.activatedRoute=t,this.heroesService=r,this.router=a,this.imgLoad=!1}ngOnInit(){this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.heroesService.getHeroesPorId(t))).subscribe(t=>{this.heroe=t},t=>{console.error(t),this.error=t})}irListado(){this.router.navigate(["/heroes/listado"])}irBuscador(){this.router.navigate(["/heroes/buscar"])}irEditar(){this.router.navigate(["/heroes/editar",this.heroe.id])}onLoadImg(){this.imgLoad=!0}imagenError(){this.imagenHeroe.nativeElement.src="assets/no-image.png"}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gz),e.Y36(h),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-heroe"]],viewQuery:function(t,r){if(1&t&&e.Gf(se,5),2&t){let a;e.iGM(a=e.CRH())&&(r.imagenHeroe=a.first)}},decls:7,vars:4,consts:[["fxLayout","row","fxLayoutAlign","center"],["fxFlex","50",4,"ngIf"],["fxFlex","50","style","border-radius: 20px;","class","alert alert-danger mt-4 animate__animated animate__flipInX animate__fast",4,"ngIf"],["cols","1","rowHeight","550px",4,"ngIf","ngIfElse"],["divHeroe",""],["fxFlex","50"],[1,"alert","alert-danger","mt-4","animate__animated","animate__flipInX","animate__fast",2,"border-radius","20px"],["mat-stroked-button","","color","accent",2,"border-color","#303030","border-radius","20px",3,"click"],["fxFlex","50",1,"alert","alert-danger","mt-4","animate__animated","animate__flipInX","animate__fast",2,"border-radius","20px"],["cols","1","rowHeight","550px"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","50px","style","margin-bottom: 74px;","class","animate__animated animate__zoomIn",4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","50px",1,"animate__animated","animate__zoomIn",2,"margin-bottom","74px"],["fxFlex.lg","35","fxFlex.md","45"],[2,"text-align","center","margin-bottom","-30px"],["style","width: 400px; max-width: 100%; height: 500px;","fxLayout","row","fxLayoutAlign","center center",4,"ngIf"],[1,"animate__animated","animate__fadeIn","animate__slow",3,"hidden","src","load","error"],["imagen",""],["fxFlex","35"],[2,"margin-top","10px"],["class","tama\xf1o-fuente","style","line-height : 25px;",4,"ngIf"],[1,"mat-background"],["mat-stroked-button","","color","accent",2,"border-color","#7b1fa2","border-radius","20px",3,"click"],["mat-stroked-button","",2,"border-color","#7b1fa2","border-radius","20px","color","#ffd645 !important",3,"click"],["fxLayout","row","fxLayoutAlign","center center",2,"width","400px","max-width","100%","height","500px"],[1,"tama\xf1o-fuente",2,"line-height","25px"],[2,"margin-left","2px"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,le,13,0,"div",1),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,ce,4,0,"div",2),e.qZA(),e.YNc(4,me,3,0,"mat-grid-list",3),e.YNc(5,fe,1,1,"ng-template",null,4,e.W1O)),2&t){const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",r.error&&404===r.error.status),e.xp6(2),e.Q6J("ngIf",r.error&&0===r.error.status),e.xp6(1),e.Q6J("ngIf",!r.heroe&&!r.error)("ngIfElse",a)}},directives:[c.xw,c.Wh,m.O5,c.yH,g.lW,d.Hw,J.Il,J.DX,H.$g,c.SQ,l.a8,l.dk,l.n5,l.$j,Z.d,l.dn],pipes:[m.rS,v],styles:["img[_ngcontent-%COMP%]{margin-top:10px;width:400px;max-width:100%;border-radius:20px;box-shadow:4px 4px 4px 5px #00000036,4px 4px 4px 4px #0000003d;height:500px}.mat-background[_ngcontent-%COMP%]{background-color:#7b1fa2!important}.tama\\f1o-fuente[_ngcontent-%COMP%]{font-size:15px}"]}),o})();var Te=s(6077),I=s(6701),Ae=s(8643);const ve=[{path:"",component:(()=>{class o{constructor(t,r){this.authService=t,this.router=r}get usuario(){return this.authService.auth}logout(){this.authService.loguot(),this.router.navigate(["./auth"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Te.e),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:38,vars:0,consts:[["fullscreen",""],["mode","push"],["sidenav",""],["color","primary"],[1,"spacer"],["mat-icon-button","",3,"click"],["routerLink","./listado","mat-list-item","",3,"click"],["mat-list-icon",""],["routerLink","./agregar","mat-list-item","",3,"click"],["routerLink","./buscar","mat-list-item","",3,"click"],[2,"box-shadow","0px 5px 0px 0px rgba(0, 0, 0, 0.21), 0px 0px 0px 3px rgba(0, 0, 0, 0.24)"],["mat-icon-button","","onclick","blur()",3,"click"],[2,"margin-left","5px"],["mat-stroked-button","","mat-list-icon","","color","warn",2,"border-radius","20px","margin-right","10px","border-color","#212121",3,"click"],[1,"containers"]],template:function(t,r){if(1&t){const a=e.EpF();e.TgZ(0,"mat-sidenav-container",0),e.TgZ(1,"mat-sidenav",1,2),e.TgZ(3,"mat-toolbar",3),e._uU(4," Men\xfa "),e._UZ(5,"span",4),e.TgZ(6,"button",5),e.NdJ("click",function(){return e.CHM(a),e.MAs(2).toggle()}),e.TgZ(7,"mat-icon"),e._uU(8,"keyboard_double_arrow_left"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"mat-nav-list"),e.TgZ(10,"a",6),e.NdJ("click",function(){return e.CHM(a),e.MAs(2).toggle()}),e.TgZ(11,"mat-icon",7),e._uU(12,"label"),e.qZA(),e.TgZ(13,"span"),e._uU(14," Listado de H\xe9roes "),e.qZA(),e.qZA(),e.TgZ(15,"a",8),e.NdJ("click",function(){return e.CHM(a),e.MAs(2).toggle()}),e.TgZ(16,"mat-icon",7),e._uU(17,"add"),e.qZA(),e.TgZ(18,"span"),e._uU(19," Agregar H\xe9roe "),e.qZA(),e.qZA(),e.TgZ(20,"a",9),e.NdJ("click",function(){return e.CHM(a),e.MAs(2).toggle()}),e.TgZ(21,"mat-icon",7),e._uU(22,"search"),e.qZA(),e.TgZ(23,"span"),e._uU(24," Buscar H\xe9roe "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"mat-toolbar",10),e.TgZ(26,"button",11),e.NdJ("click",function(){return e.CHM(a),e.MAs(2).toggle()}),e.TgZ(27,"mat-icon"),e._uU(28,"menu"),e.qZA(),e.qZA(),e.TgZ(29,"h1",12),e._uU(30," H\xe9roes App "),e.qZA(),e._UZ(31,"span",4),e.TgZ(32,"button",13),e.NdJ("click",function(){return r.logout()}),e.TgZ(33,"mat-icon"),e._uU(34,"logout"),e.qZA(),e._uU(35," Logout "),e.qZA(),e.qZA(),e.TgZ(36,"div",14),e._UZ(37,"router-outlet"),e.qZA(),e.qZA()}},directives:[I.TM,I.JX,Ae.Ye,g.lW,d.Hw,A.Hk,u.yS,A.Tg,A.Nh,u.lC],styles:[".containers[_ngcontent-%COMP%]{margin:15px}"]}),o})(),children:[{path:"listado",component:G},{path:"agregar",component:L},{path:"editar/:id",component:L},{path:"buscar",component:ie},{path:":id",component:xe},{path:"**",redirectTo:"listado"}]}];let Ce=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(ve)],u.Bz]}),o})();var be=s(6647);let qe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,F.o9,p.u5,be.q,Ce]]}),o})()}}]);