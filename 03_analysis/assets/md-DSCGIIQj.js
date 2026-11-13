import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-pVwvuQkB.js";import{t as d}from"./slidev/default-Did6iOBq.js";import{nt as f,rt as p}from"./index-U7BydiWx.js";var m={class:`grid grid-cols-2 gap-4 mt-2`},h={class:`text-xs space-y-2`},g={class:`vec-tile`},_={class:`vec-tile`},v={class:`vec-block vec-block--warn text-xs`},y={__name:`03_analysis.md__slidev_18`,setup(y){let{$slidev:b,$nav:x,$clicksContext:S,$clicks:C,$page:w,$renderContext:T,$frontmatter:E}=p();return S.setup(),(p,y)=>{let b=e(`click`);return t(),a(d,o(n(l(f)(l(E),17))),{default:r(()=>[y[4]||=c(`h1`,null,`Практика: найти проблемы`,-1),y[5]||=c(`div`,{class:`gdb-time`},`7 минут`,-1),c(`div`,m,[y[3]||=c(`div`,null,[c(`div`,{class:`vec-tile text-xs`},[c(`b`,null,"Проверьте `nyc_neighborhoods`:"),s(` невалидные геометрии, пересечения, пропуски. `)]),c(`details`,{class:`ras-toggle mt-3 text-xs`},[c(`summary`,null,`Показать проверки`),c(`pre`,{class:`mt-2`},[c(`code`,null,`-- невалидные
SELECT gid, name,
       ST_IsValidReason(geom)
FROM nyc_neighborhoods
WHERE NOT ST_IsValid(geom);
-- пересечения
SELECT a.gid, b.gid
FROM nyc_neighborhoods a
JOIN nyc_neighborhoods b
  ON a.gid < b.gid
 AND ST_Intersects(a.geom, b.geom)
WHERE ST_Area(
  ST_Intersection(a.geom, b.geom)
) > 0;`)])])],-1),c(`div`,h,[i((t(),u(`div`,g,[...y[0]||=[c(`b`,null,`Пустой результат`,-1),s(` по валидности — хороший знак, но не гарантия топологии. `,-1)]])),[[b]]),i((t(),u(`div`,_,[...y[1]||=[c(`b`,null,`Пересечения`,-1),s(` могут быть допустимы: границы соседних районов касаются. `,-1)]])),[[b]]),i((t(),u(`div`,v,[...y[2]||=[s(` Проверяйте площадь пересечения: касание даёт 0, наложение — больше 0. `,-1)]])),[[b]])])])]),_:1},16)}}};export{y as default};