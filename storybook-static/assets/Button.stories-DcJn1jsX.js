import{u as R,j as z}from"./useMobileSensors-D3pAhlZy.js";import{r as L}from"./iframe-bJ6cI6hz.js";const M=({children:o,variant:N="primary",size:C="medium",onClick:j,disabled:x=!1,enableSensors:r=!1,onMotion:S,onTilt:w,onProximity:B,onLightChange:q,...T})=>{const[e,s]=L.useState({isMoving:!1,tilt:{x:0,y:0},isNear:!1,lightLevel:"unknown",shadowDirection:{x:0,y:0}}),a=R({enableAccelerometer:r,enableOrientation:r,enableProximity:r,enableLight:r,threshold:.5});L.useEffect(()=>{if(!r)return;const I=setInterval(()=>{const D=a.detectMotion();D!==e.isMoving&&(s(n=>({...n,isMoving:D})),S?.());const t=a.detectTilt();(Math.abs(t.x-e.tilt.x)>5||Math.abs(t.y-e.tilt.y)>5)&&(s(n=>({...n,tilt:t})),w?.(t));const b=a.isNear();b!==e.isNear&&(s(n=>({...n,isNear:b})),B?.(b));const h=a.getLightLevel();h!==e.lightLevel&&(s(n=>({...n,lightLevel:h})),q?.(h));const f=a.getShadowDirection();(Math.abs(f.x-e.shadowDirection.x)>.5||Math.abs(f.y-e.shadowDirection.y)>.5)&&s(n=>({...n,shadowDirection:f}))},100);return()=>clearInterval(I)},[r,a,e,S,w,B,q]);const $="font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",P={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",outline:"border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"},k={small:"px-3 py-1.5 text-sm",medium:"px-4 py-2 text-base",large:"px-6 py-3 text-lg"},E=x?"opacity-50 cursor-not-allowed":"cursor-pointer",F=r?[e.isMoving&&"animate-pulse",e.isNear&&"scale-110",e.lightLevel==="dark"&&"brightness-75",e.lightLevel==="bright"&&"brightness-125"].filter(Boolean).join(" "):"",O=`${$} ${P[N]} ${k[C]} ${E} ${F}`;return z.jsxs("button",{className:O,onClick:j,disabled:x,style:{transform:r?`rotateX(${e.tilt.y}deg) rotateY(${e.tilt.x}deg)`:void 0,boxShadow:r?`${e.shadowDirection.x}px ${e.shadowDirection.y}px 20px rgba(0, 0, 0, 0.3)`:void 0},...T,children:[o,r&&z.jsxs("div",{className:"text-xs mt-1 opacity-50",children:[a.isSupported.accelerometer&&`Mov: ${e.isMoving?"Sí":"No"}`,a.isSupported.accelerometer&&` | Sombra: (${e.shadowDirection.x.toFixed(1)}, ${e.shadowDirection.y.toFixed(1)})`,a.isSupported.proximity&&` | Prox: ${e.isNear?"Cerca":"Lejos"}`,a.isSupported.light&&` | Luz: ${e.lightLevel}`]})]})};M.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"El contenido del botón"},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"El tipo de botón",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"El tamaño del botón",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta al hacer clic"},disabled:{required:!1,tsType:{name:"boolean"},description:"Si el botón está deshabilitado",defaultValue:{value:"false",computed:!1}},enableSensors:{required:!1,tsType:{name:"boolean"},description:"Habilitar interacción con sensores móviles",defaultValue:{value:"false",computed:!1}},onMotion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta al detectar movimiento"},onTilt:{required:!1,tsType:{name:"signature",type:"function",raw:"(tilt: { x: number; y: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},name:"tilt"}],return:{name:"void"}}},description:"Función que se ejecuta al detectar inclinación"},onProximity:{required:!1,tsType:{name:"signature",type:"function",raw:"(isNear: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isNear"}],return:{name:"void"}}},description:"Función que se ejecuta al detectar proximidad"},onLightChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(level: string) => void",signature:{arguments:[{type:{name:"string"},name:"level"}],return:{name:"void"}}},description:"Función que se ejecuta al cambiar el nivel de luz"}}};const _={title:"Components/Button",component:M,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},enableSensors:{control:{type:"boolean"}}}},i={args:{children:"Botón Primario",variant:"primary"}},l={args:{children:"Botón Secundario",variant:"secondary"}},c={args:{children:"Botón Outline",variant:"outline"}},d={args:{children:"Botón Pequeño",size:"small"}},u={args:{children:"Botón Grande",size:"large"}},m={args:{children:"Botón Deshabilitado",disabled:!0}},p={args:{children:"Haz clic aquí",onClick:()=>alert("¡Botón clickeado!")}},g={args:{children:"Botón con Sensores",enableSensors:!0,onMotion:()=>console.log("¡Movimiento detectado!"),onTilt:o=>console.log("Inclinación:",o),onProximity:o=>console.log("Proximidad:",o?"Cerca":"Lejos"),onLightChange:o=>console.log("Nivel de luz:",o)},parameters:{docs:{description:{story:"Este botón interactúa con los sensores del dispositivo móvil. Mueve tu dispositivo, inclínalo, acércalo o cambia la iluminación para ver los efectos."}}}},v={args:{children:"Demo Sensores",enableSensors:!0,variant:"primary",size:"large"},parameters:{docs:{description:{story:"Demostración completa de todas las funcionalidades de sensores. Abre esto en un dispositivo móvil para ver los efectos."}}}},y={args:{children:"Botón con Sombra Dinámica",enableSensors:!0,variant:"primary",size:"large"},parameters:{docs:{description:{story:"Botón con efecto de sombra dinámica que responde al acelerómetro. La sombra se mueve según la inclinación del dispositivo, simulando una fuente de luz real."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Primario',
    variant: 'primary'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Secundario',
    variant: 'secondary'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Outline',
    variant: 'outline'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Pequeño',
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Grande',
    size: 'large'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Deshabilitado',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Haz clic aquí',
    onClick: () => alert('¡Botón clickeado!')
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón con Sensores',
    enableSensors: true,
    onMotion: () => console.log('¡Movimiento detectado!'),
    onTilt: tilt => console.log('Inclinación:', tilt),
    onProximity: isNear => console.log('Proximidad:', isNear ? 'Cerca' : 'Lejos'),
    onLightChange: level => console.log('Nivel de luz:', level)
  },
  parameters: {
    docs: {
      description: {
        story: 'Este botón interactúa con los sensores del dispositivo móvil. Mueve tu dispositivo, inclínalo, acércalo o cambia la iluminación para ver los efectos.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Demo Sensores',
    enableSensors: true,
    variant: 'primary',
    size: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demostración completa de todas las funcionalidades de sensores. Abre esto en un dispositivo móvil para ver los efectos.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón con Sombra Dinámica',
    enableSensors: true,
    variant: 'primary',
    size: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con efecto de sombra dinámica que responde al acelerómetro. La sombra se mueve según la inclinación del dispositivo, simulando una fuente de luz real.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const A=["Primary","Secondary","Outline","Small","Large","Disabled","WithClick","WithSensors","SensorDemo","ShadowEffect"];export{m as Disabled,u as Large,c as Outline,i as Primary,l as Secondary,v as SensorDemo,y as ShadowEffect,d as Small,p as WithClick,g as WithSensors,A as __namedExportsOrder,_ as default};
