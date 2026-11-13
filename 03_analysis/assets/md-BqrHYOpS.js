import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-pVwvuQkB.js";import{t as d}from"./slidev/default-Did6iOBq.js";import{nt as f,rt as p}from"./index-U7BydiWx.js";var m={class:`vec-block vec-block--warn mt-3 text-xs`},h={__name:`03_analysis.md__slidev_40`,setup(h){let{$slidev:g,$nav:_,$clicksContext:v,$clicks:y,$page:b,$renderContext:x,$frontmatter:S}=p();return v.setup(),(p,h)=>{let g=e(`click`);return t(),a(d,o(n(l(f)(l(S),39))),{default:r(()=>[h[1]||=c(`h1`,null,`Задание 4: качество и индекс`,-1),h[2]||=c(`div`,{class:`gdb-time`},`9 минут`,-1),h[3]||=c(`div`,{class:`grid grid-cols-2 gap-4 mt-2`},[c(`div`,null,[c(`div`,{class:`vec-tile text-xs`},[c(`b`,null,`1.`),s(` Проверьте невалидные геометрии и дубликаты. `)]),c(`details`,{class:`ras-toggle mt-2 text-xs`},[c(`summary`,null,`Показать проверки`),c(`pre`,{class:`mt-2`},[c(`code`,null,`SELECT gid, name,
       ST_IsValidReason(geom)
FROM nyc_neighborhoods
WHERE NOT ST_IsValid(geom);
SELECT geom, count(*)
FROM trubka
GROUP BY geom
HAVING count(*) > 1;`)])])]),c(`div`,null,[c(`div`,{class:`vec-tile text-xs`},[c(`b`,null,`2.`),s(` Создайте GiST-индекс и сравните план запроса. `)]),c(`details`,{class:`ras-toggle mt-2 text-xs`},[c(`summary`,null,`Показать решение`),c(`pre`,{class:`mt-2`},[c(`code`,null,`CREATE INDEX trubka_geom_gix
ON trubka USING GIST (geom);
EXPLAIN (ANALYZE, BUFFERS)
SELECT *
FROM trubka
WHERE ST_DWithin(
  geom::geography,
  ST_SetSRID(
    ST_MakePoint(30.001, 59.419),
    4326)::geography,
  200);`)])])])],-1),i((t(),u(`div`,m,[...h[0]||=[c(`b`,null,`Осторожно:`,-1),s(),c(`code`,null,`ST_DWithin`,-1),s(` по `,-1),c(`code`,null,`geography`,-1),s(` может не использовать обычный GiST по `,-1),c(`code`,null,`geometry`,-1),s(`. Проверьте план и при необходимости добавьте индекс по выражению. `,-1)]])),[[g]])]),_:1},16)}}};export{h as default};