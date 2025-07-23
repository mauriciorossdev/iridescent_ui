import{u as R,j as i}from"./useMobileSensors-CADmHjbs.js";import{r as j}from"./iframe--q0H8gQd.js";const $=({children:n,variant:C="primary",size:T="medium",onClick:w,disabled:h=!1,enableSensors:o=!1,onMotion:B,onTilt:q,onProximity:D,onLightChange:N,...z})=>{const[e,s]=j.useState({isMoving:!1,tilt:{x:0,y:0},isNear:!1,lightLevel:"unknown",shadowDirection:{x:0,y:0,intensity:0}}),a=R({enableAccelerometer:o,enableOrientation:o,enableProximity:o,enableLight:o,threshold:.5});j.useEffect(()=>{if(!o)return;const I=setInterval(()=>{const M=a.detectMotion();M!==e.isMoving&&(s(r=>({...r,isMoving:M})),B?.());const t=a.detectTilt();(Math.abs(t.x-e.tilt.x)>5||Math.abs(t.y-e.tilt.y)>5)&&(s(r=>({...r,tilt:t})),q?.(t));const f=a.isNear();f!==e.isNear&&(s(r=>({...r,isNear:f})),D?.(f));const x=a.getLightLevel();x!==e.lightLevel&&(s(r=>({...r,lightLevel:x})),N?.(x));const S=a.getShadowDirection();(Math.abs(S.x-e.shadowDirection.x)>.5||Math.abs(S.y-e.shadowDirection.y)>.5)&&s(r=>({...r,shadowDirection:S}))},100);return()=>clearInterval(I)},[o,a,e,B,q,D,N]);const P="font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",k={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",outline:"border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"},E={small:"px-3 py-1.5 text-sm",medium:"px-4 py-2 text-base",large:"px-6 py-3 text-lg"},F=h?"opacity-50 cursor-not-allowed":"cursor-pointer",O=o?[e.isMoving&&"animate-pulse",e.isNear&&"scale-110",e.lightLevel==="dark"&&"brightness-75",e.lightLevel==="bright"&&"brightness-125"].filter(Boolean).join(" "):"",L=`${P} ${k[C]} ${E[T]} ${F} ${O}`;return o?i.jsx("div",{className:"inline-block",style:{boxShadow:`${e.shadowDirection.x}px ${e.shadowDirection.y}px 20px rgba(0, 0, 0, ${.2+e.shadowDirection.intensity*.4})`,transition:"box-shadow 0.1s ease-out"},children:i.jsxs("button",{className:L,onClick:w,disabled:h,style:{transform:`rotateX(${e.tilt.y}deg) rotateY(${e.tilt.x}deg)`,transition:"transform 0.1s ease-out"},...z,children:[n,i.jsxs("div",{className:"text-xs mt-1 opacity-50",children:[a.isSupported.accelerometer&&`Mov: ${e.isMoving?"Sí":"No"}`,a.isSupported.accelerometer&&` | Sombra: (${e.shadowDirection.x.toFixed(1)}, ${e.shadowDirection.y.toFixed(1)}) [${(e.shadowDirection.intensity*100).toFixed(0)}%]`,a.isSupported.proximity&&` | Prox: ${e.isNear?"Cerca":"Lejos"}`,a.isSupported.light&&` | Luz: ${e.lightLevel}`]})]})}):i.jsx("button",{className:L,onClick:w,disabled:h,...z,children:n})};$.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"El contenido del botón"},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"El tipo de botón",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"El tamaño del botón",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta al hacer clic"},disabled:{required:!1,tsType:{name:"boolean"},description:"Si el botón está deshabilitado",defaultValue:{value:"false",computed:!1}},enableSensors:{required:!1,tsType:{name:"boolean"},description:"Habilitar interacción con sensores móviles",defaultValue:{value:"false",computed:!1}},onMotion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta al detectar movimiento"},onTilt:{required:!1,tsType:{name:"signature",type:"function",raw:"(tilt: { x: number; y: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},name:"tilt"}],return:{name:"void"}}},description:"Función que se ejecuta al detectar inclinación"},onProximity:{required:!1,tsType:{name:"signature",type:"function",raw:"(isNear: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isNear"}],return:{name:"void"}}},description:"Función que se ejecuta al detectar proximidad"},onLightChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(level: string) => void",signature:{arguments:[{type:{name:"string"},name:"level"}],return:{name:"void"}}},description:"Función que se ejecuta al cambiar el nivel de luz"}}};const _={title:"Components/Button",component:$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},enableSensors:{control:{type:"boolean"}}}},l={args:{children:"Botón Primario",variant:"primary"}},c={args:{children:"Botón Secundario",variant:"secondary"}},d={args:{children:"Botón Outline",variant:"outline"}},u={args:{children:"Botón Pequeño",size:"small"}},m={args:{children:"Botón Grande",size:"large"}},p={args:{children:"Botón Deshabilitado",disabled:!0}},g={args:{children:"Haz clic aquí",onClick:()=>alert("¡Botón clickeado!")}},v={args:{children:"Botón con Sensores",enableSensors:!0,onMotion:()=>console.log("¡Movimiento detectado!"),onTilt:n=>console.log("Inclinación:",n),onProximity:n=>console.log("Proximidad:",n?"Cerca":"Lejos"),onLightChange:n=>console.log("Nivel de luz:",n)},parameters:{docs:{description:{story:"Este botón interactúa con los sensores del dispositivo móvil. Mueve tu dispositivo, inclínalo, acércalo o cambia la iluminación para ver los efectos."}}}},y={args:{children:"Demo Sensores",enableSensors:!0,variant:"primary",size:"large"},parameters:{docs:{description:{story:"Demostración completa de todas las funcionalidades de sensores. Abre esto en un dispositivo móvil para ver los efectos."}}}},b={args:{children:"Botón con Sombra Dinámica",enableSensors:!0,variant:"primary",size:"large"},parameters:{docs:{description:{story:"Botón con efecto de sombra dinámica que responde al acelerómetro. La sombra se mueve según la inclinación del dispositivo, simulando una fuente de luz real."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Primario',
    variant: 'primary'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Secundario',
    variant: 'secondary'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Outline',
    variant: 'outline'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Pequeño',
    size: 'small'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Grande',
    size: 'large'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Botón Deshabilitado',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Haz clic aquí',
    onClick: () => alert('¡Botón clickeado!')
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const A=["Primary","Secondary","Outline","Small","Large","Disabled","WithClick","WithSensors","SensorDemo","ShadowEffect"];export{p as Disabled,m as Large,d as Outline,l as Primary,c as Secondary,y as SensorDemo,b as ShadowEffect,u as Small,g as WithClick,v as WithSensors,A as __namedExportsOrder,_ as default};
