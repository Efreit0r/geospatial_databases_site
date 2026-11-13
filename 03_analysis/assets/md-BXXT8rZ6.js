import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-pVwvuQkB.js";import{t as d}from"./slidev/default-Did6iOBq.js";import{nt as f,rt as p}from"./index-U7BydiWx.js";var m={class:`grid grid-cols-2 gap-4 mt-3`},h={class:`text-xs space-y-2`},g={class:`vec-tile`},_={class:`vec-tile`},v={class:`vec-block vec-block--warn text-xs`},y={__name:`03_analysis.md__slidev_38`,setup(y){let{$slidev:b,$nav:x,$clicksContext:S,$clicks:C,$page:w,$renderContext:T,$frontmatter:E}=p();return S.setup(),(p,y)=>{let b=e(`click`);return t(),a(d,o(n(l(f)(l(E),37))),{default:r(()=>[y[4]||=c(`h1`,null,`Задание 2: близкие пары`,-1),y[5]||=c(`div`,{class:`gdb-time`},`9 минут`,-1),y[6]||=c(`div`,{class:`vec-tile mt-2`},[s(` Найдите пары точек, расстояние между которыми не больше `),c(`b`,null,`50 метров`),s(`. Выведите расстояние в метрах и ограничьте результат 10 парами. `)],-1),c(`div`,m,[y[3]||=c(`div`,null,[c(`details`,{class:`ras-toggle text-xs`},[c(`summary`,null,`Показать решение`),c(`pre`,{class:`mt-2`},[c(`code`,null,`SELECT a.id AS a,
       b.id AS b,
       round(ST_Distance(
         a.geom::geography,
         b.geom::geography
       )::numeric, 1) AS meters
FROM trubka a
JOIN trubka b
  ON a.id < b.id
 AND ST_DWithin(
   a.geom::geography,
   b.geom::geography,
   50)
ORDER BY meters
LIMIT 10;`)])])],-1),c(`div`,h,[i((t(),u(`div`,g,[...y[0]||=[c(`b`,null,`Ожидаемо:`,-1),s(` 256 пар. `,-1),c(`code`,null,`a.id < b.id`,-1),s(` убирает саму точку и зеркальные повторы. `,-1)]])),[[b]]),i((t(),u(`div`,_,[...y[1]||=[c(`b`,null,[c(`code`,null,`::geography`)],-1),s(` даёт расстояние в метрах без проекции. `,-1)]])),[[b]]),i((t(),u(`div`,v,[...y[2]||=[s(` Без `,-1),c(`code`,null,`LIMIT`,-1),s(` запрос вернёт все пары. Для отчёта это может быть слишком много строк. `,-1)]])),[[b]])])])]),_:1},16)}}};export{y as default};