export default 
[
  {"title": 'All glory to... Gloria',
    "html":'Создал Свелт-приложение из  <a href="https://github.com/sveltejs/template">шаблона</a> ... и пошло-поехало, и все закрутилось ...',
    "code": `
$ cd /path/to/svelte-app
$ npm run dev
$ npm run build
$ surge public mche.us.to

   Running as *******@********* (Student)

        project: public
         domain: mche.us.to
         upload: [====================] 100% eta: 0.0s (227 files, 3275006 bytes)
            CDN: [====================] 100%

             IP: 138.197.235.123

   Success! - Published to mche.us.to

`,},
{
    "title":'Vite - замечательный сборщик JS',
    "html": 'Поробовал <a href="https://vitejs.dev/">Vite</a> для своего Svelt-сайта. Впервые натолкнулся на него в доке Vue. Пошло хорошо, только не смог настроить SCSS/SASS. Также пытался через <a href="https://windicss.org/">Windi CSS</a> - пока не катит.',
},
{
    "title":'Vite + Svelte + TypeScript + SCSS + Babel + Autoprefixer + HMR',
    "html": `
    Еще один замечательный шаблон-стартер <a href="https://github.com/baileyherbert/svelte-vite-starter">https://github.com/baileyherbert/svelte-vite-starter</a>.
    Переделал на него этот сайтег. Все работает из коробки, стили SCSS работают.`,
},
    /*
    **
    **
    */
  {"title":'Vue кириллические пропсы',
    "html":'Крутяк, но не проверил на сборщиках parcel, rollup',
    "code":`
// HTML
    <v-foo :пропс1=" ... " ></v-foo>
    
// JS компонент Foo
    const props = {
      "пропс1": ...,
      ...
    };
    
`},
/*
    **
    **
    */
  {"title":'SVG-ништяки',
    "html":'Сайтег <a href="https://www.flaticon.com/">www.flaticon.com</a>. Раньше куча SVG и можно было брать на <a href="https://icons8.ru/">icons8.ru</a>, но у них пошла монетизация, теперь доступен только PNG.',

  },

  {"title":'NodeMCU ESP8266 под Lua',
    "html":'Плата типовая /dev/ttyUSB0 (Silicon Labs, usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0)',
    "code":`
1. Установить питоновский флэшер:
$ pip install esptool --user

2. Скачать бинарную прошивку https://nodemcu-build.com/ (ссылка придет на почту)
3. Прошивается:
$ python .local/lib/python3.7/site-packages/esptool.py --trace --port /dev/ttyUSB0 --baud 921600 write_flash -fm dio 0x00000 Загрузки/nodemcu-release-9-modules-2020-10-29-08-17-17-float.bin

4. Установить https://github.com/andidittrich/NodeMCU-Tool
$  npm install nodemcu-tool -g

$ nodemcu-tool ... пошло-поехало... и все закрутилось ...

`},
];