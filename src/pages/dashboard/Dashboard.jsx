import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { IoDocument, IoSettings } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

const Dashboard = () => {

  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("refreshtoken")

    navigate('/login')
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className='md:hidden sticky top-1.5 left-0 w-[30px] h-[30px] text-xl bg-[#cad5e27c] rounded-tr-xl rounded-br-xl flex items-center justify-center'><LuMenu /></button>

      <div className='flex md:h-screen'>

      {open && (
         <div
          className="fixed inset-0 bg-black/40 z-30 duration-300"
          onClick={() => setOpen(false)}
        ></div>
      )}

        <div 
        className={`
          fixed md:static top-0 left-0 h-full w-[250px] bg-slate-100 flex-col justify-between rounded-r-2xl
          transform transition-transform duration-300 z-40
          ${open ? "translate-x-0 flex" : "-translate-x-full"}
          md:translate-x-0 md:flex
        `}>

          <div>
            <div className='md:text-center text-2xl flex items-center font-bold text-start p-4 cursor-default'>
              <h2 className='flex-1'>Dashboard</h2>
              <IoCloseCircle onClick={() => setOpen(false)} className='md:hidden' />
            </div>
            <ul className='p-3 space-y-2.5'>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5"
                  to={'profile'}>
                  <FaUser /> Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5"
                  to={'resume'}>
                  <IoDocument /> Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5"
                  to={'settings'}>
                  <IoSettings /> Settings
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='p-3'>
            <button
              onClick={handleLogOut}
              className="w-full bg-red-400 text-white hover:bg-red-500 p-3 rounded-[10px] font-medium duration-300 cursor-pointer">
              Log Out
            </button>
          </div>
        </div>

        <div className='m-5 p-5 flex-1 bg-slate-100 md:overflow-y-auto rounded-xl'>
          <Outlet />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam mollitia totam, sapiente reprehenderit magni consequatur, et, cum aspernatur aliquam molestias. Autem quo atque molestiae mollitia quod, accusantium repellat ipsum expedita doloremque ab quaerat dolor adipisci dolorem at non quia quibusdam corrupti distinctio nisi id harum. Dolore exercitationem impedit quas quasi eos repellat voluptates illum fugiat aperiam nobis quo animi rem eveniet, id fugit maiores inventore. Repudiandae eaque incidunt quaerat natus sunt illo delectus voluptas, molestias sit at amet vitae, perferendis quisquam fugiat voluptates assumenda ab ipsam temporibus eos consectetur doloremque eius dolorem! Sed dolorum optio aperiam ut similique fuga debitis error qui, ex voluptate consequuntur aspernatur praesentium maiores atque mollitia quod minima quia deleniti. Minima doloremque adipisci pariatur vitae ea similique quidem, quod distinctio et quis eveniet tempora ut cupiditate illum possimus voluptatum. Odio iste voluptatem assumenda voluptas necessitatibus culpa fugiat nostrum! Harum at expedita aut nostrum voluptatem omnis cumque natus tenetur reiciendis cupiditate illum rem quidem, corrupti dolor assumenda quia delectus sit obcaecati soluta asperiores facere. Illum, repudiandae, sint quas facilis eligendi cum consequuntur laboriosam accusamus minima enim quod blanditiis nihil quos exercitationem! Deleniti voluptas fugiat laboriosam incidunt, consequatur adipisci eius quasi magni ullam. Quibusdam, velit corrupti. Quaerat id sint libero repellat? Sapiente magnam assumenda asperiores accusamus pariatur eligendi, fugit aliquid aut sint cupiditate quaerat velit voluptatem excepturi id ut? Omnis vel officia cumque veniam quaerat ut blanditiis at veritatis laudantium ipsum consequatur quis voluptatibus dicta maxime sapiente saepe voluptatem aliquid excepturi aut laborum consequuntur, velit placeat provident modi. Corrupti assumenda neque libero officia consequatur atque, ipsa saepe, in aliquam enim explicabo. Repellendus illum vel facere eveniet, hic nesciunt rem earum, molestiae amet, fugiat blanditiis suscipit animi quis mollitia minima. Alias quos distinctio aliquid, nobis porro sunt sapiente laborum quae, rerum atque id odit possimus! Illum doloribus maxime velit excepturi fuga voluptas reiciendis, ipsum iure magnam sint minus ullam, ex praesentium distinctio, laboriosam quae. Sint cupiditate nisi labore exercitationem id sequi dolor perspiciatis deleniti laborum. Dolore asperiores dignissimos blanditiis consequatur provident culpa ut placeat! Cumque, consectetur, reprehenderit ipsa dolores quis quo odio aspernatur possimus unde iusto in odit, repellat explicabo ut inventore. Explicabo totam praesentium optio impedit, porro magni nisi blanditiis deserunt commodi hic. Nemo commodi obcaecati tempore atque unde quaerat ad aperiam magnam animi, distinctio porro. Accusantium architecto ipsam itaque molestias, iusto odio ad at minima placeat vel nulla repellendus omnis beatae consequuntur ut pariatur nihil. Cumque molestias maiores accusamus quae. Molestias possimus molestiae officia veritatis quae ducimus quos, distinctio nulla illo cum, unde mollitia reiciendis quo! Et dicta saepe error est, earum ducimus sunt ipsa illo explicabo officiis quas porro minima laudantium reprehenderit libero? Optio quidem consequuntur odio eaque alias laboriosam maiores ab quam eius ex recusandae, cumque tempore, libero illo exercitationem voluptatibus. Atque impedit doloribus vitae iusto, a aperiam cumque ea, officiis harum cum sed! Rem impedit porro harum odio, doloremque tenetur eum consectetur qui soluta quaerat iusto autem eos sequi ut, fugiat, itaque cum dolore corporis repellat sit dolores asperiores suscipit! Repellendus iusto voluptates ratione consequuntur quis a culpa deserunt nesciunt, incidunt quasi eveniet fugiat, eligendi dignissimos labore, error pariatur iure sed? Maxime fugit ab atque sequi, quae tenetur, illum quis, dolorem tempora totam aliquam doloremque dolorum expedita culpa nulla hic rem! Eveniet excepturi possimus modi minima iste rerum saepe laborum, fuga amet voluptatibus. Commodi dolor, autem neque cumque ut porro quam, error ratione eveniet culpa, dolorem pariatur dolores incidunt iste eius illo quidem accusantium delectus illum expedita velit! Commodi, itaque possimus autem assumenda quae nemo voluptate porro? Deserunt nemo rerum numquam doloremque delectus quam consequatur aliquid vero fugit! Provident neque, optio hic iste dolores obcaecati, et deserunt reprehenderit accusantium iure eius at temporibus quos accusamus fugit minus ipsam recusandae tempore, nisi officiis quibusdam ab corrupti repellat? Expedita dicta in, labore est iusto quod reiciendis iure fuga dolor commodi eveniet eum consequuntur cupiditate enim, alias fugiat, magni vero? Earum nihil doloremque accusamus nam autem maxime explicabo cumque dicta commodi? Eligendi tempora quod omnis tempore molestiae animi id sed quisquam iure, vitae qui odio. Deleniti quasi, nam harum illum tenetur nemo doloremque odit architecto ipsum, sequi neque iusto ab velit explicabo eveniet ducimus dignissimos maxime aspernatur commodi similique. Nemo deserunt sint neque tenetur dolore in et cum cumque distinctio cupiditate saepe inventore minus doloribus, quas explicabo, officia sit quod totam asperiores assumenda quo pariatur. Harum magni quibusdam neque soluta, ratione libero molestiae, quasi quia numquam ipsum eligendi sed odit excepturi asperiores in, laboriosam veniam fuga laborum id ipsam debitis. Est labore unde rem necessitatibus assumenda esse eveniet nesciunt minima quo magni, impedit omnis vel voluptatum ad sint similique autem quae maxime? Quae omnis reprehenderit nesciunt! Impedit recusandae voluptatem quibusdam ex exercitationem repudiandae temporibus ipsa, quo soluta harum est saepe at consectetur blanditiis nam ratione laborum nisi repellendus dignissimos? Eaque laborum labore illo expedita eligendi quaerat veritatis suscipit quam reiciendis qui soluta quia similique iste aperiam vel assumenda, ipsam doloremque sequi deserunt cupiditate quasi nobis cum architecto. Necessitatibus repellat ducimus optio corrupti maxime ad perspiciatis provident, neque, incidunt eveniet corporis doloremque ipsam at qui obcaecati nam magni unde consequatur quisquam delectus repellendus nihil accusamus autem! Autem expedita quidem iusto error, voluptate mollitia ipsa pariatur nobis officiis dignissimos debitis provident rerum esse neque vitae eos corrupti facilis rem fugiat laborum nam quam. Labore quidem, blanditiis dolore consequatur similique doloribus minima beatae et illum dolor commodi exercitationem, nesciunt atque cum quae expedita sequi minus vel at nemo. Nostrum ratione quaerat labore necessitatibus provident quae deleniti consequatur voluptates numquam tenetur? Aut voluptas, optio necessitatibus blanditiis id sequi eligendi! Ipsam, nisi tempore sapiente illum amet odio ratione eum debitis deleniti veritatis enim minima impedit adipisci, atque, vel quis? Architecto corporis illo, officia aspernatur eos asperiores accusamus consequuntur repudiandae sequi. Impedit molestias eius quidem doloremque voluptatum odit ex vel, cumque veritatis incidunt libero eum sed quia fuga ut, reprehenderit facere quod expedita? Temporibus optio velit quibusdam cupiditate error laboriosam nemo accusamus aperiam architecto minus voluptates atque, itaque fuga, necessitatibus delectus aut, harum laborum. Vel aliquid animi accusantium doloremque laudantium dolores libero sed hic deserunt molestiae rem repudiandae perspiciatis quasi ea ullam maxime accusamus quaerat eligendi nemo consequatur id, sit inventore fugiat dicta? Eius maxime quod amet, veritatis fugiat, suscipit quibusdam vero exercitationem, reprehenderit doloremque eos animi rem nam. Enim dolor possimus aliquid architecto earum unde cumque dicta maiores corrupti? Quo omnis atque adipisci magnam velit tempore accusantium eaque culpa provident. Et quibusdam cum explicabo animi iure eum ipsum, nulla porro quis soluta aliquid odio nam sapiente assumenda voluptates, error voluptatum sit maxime, amet ea voluptas numquam velit esse aut. Sunt dolorum est, maxime ratione magnam rem labore explicabo nesciunt cupiditate iusto reiciendis eligendi aut deleniti blanditiis doloremque commodi, voluptates accusamus ad quod. Veniam sapiente similique sed, excepturi vel maxime, omnis hic neque suscipit aut corporis ullam sit inventore dolorem ipsum culpa, ad veritatis beatae nisi incidunt. Porro accusamus doloremque reiciendis maiores totam culpa delectus vitae, libero sed ex eaque, animi nisi deserunt et explicabo repellendus ipsa accusantium, tenetur quis placeat? Facere iste ratione perspiciatis velit quaerat dicta provident aperiam veniam, accusamus fuga voluptatem natus delectus libero beatae. Ea dolorem similique suscipit corporis necessitatibus, error nam quasi soluta sequi veniam odio itaque, blanditiis totam repudiandae, eius perspiciatis corrupti ex nisi eveniet exercitationem iste maxime perferendis quidem? Facilis quam distinctio omnis odit, quos nulla, molestias ipsum reprehenderit libero provident excepturi. Sequi quam rem tempore tempora officia enim eum, nobis quos ipsum tenetur magnam veritatis, dolorem, sit ab nihil autem repellat facere labore eveniet architecto? Repudiandae deserunt dolor ratione perspiciatis, quo earum reprehenderit rerum animi fuga libero alias cupiditate reiciendis sapiente facere ipsum qui vel modi explicabo molestiae minima nobis. Voluptate sit deserunt dolorem tempora nam saepe, amet corporis minima aliquid! Placeat natus rem voluptatem fuga, non dicta est sequi fugiat optio ex quis ipsa exercitationem architecto voluptates nam enim repellendus nisi aspernatur itaque aliquam cum ullam. Illum facilis aliquid quis dolorem necessitatibus aperiam adipisci officiis placeat soluta est. Voluptatem voluptatum magnam quisquam fuga, id assumenda vel tempora eligendi labore cum inventore tempore laboriosam eaque harum nulla nisi quasi dolores, quia rem necessitatibus officiis perspiciatis repellat! Iure modi, molestiae asperiores fuga quaerat similique ducimus saepe cumque. Eveniet quaerat ea necessitatibus rem sunt iusto optio id culpa sint possimus, magni officia ad deleniti soluta a saepe temporibus voluptatum, doloribus molestias dolore commodi animi atque. Aspernatur odio ducimus, dolore quaerat reprehenderit alias asperiores quasi rem maxime explicabo doloribus nam quas quam sapiente unde optio atque amet repellendus beatae, vel, modi hic. Aut adipisci labore provident dicta dolorum quod inventore facere at ad eveniet, facilis dolore omnis et nisi consequatur, voluptate sed. Iure blanditiis nulla aliquam corporis necessitatibus quibusdam temporibus perferendis, sapiente eaque odio deserunt tenetur dolore ea sint sunt nesciunt. Voluptates laudantium veniam similique a iusto culpa cumque voluptatem odio accusantium saepe sapiente molestiae, facilis, ea alias provident ad natus repellat reprehenderit est cum praesentium mollitia animi architecto. Natus fuga distinctio earum maxime maiores quod laboriosam, delectus quas voluptatibus reprehenderit amet consequatur nulla modi, pariatur aspernatur, totam debitis itaque velit repellendus officiis ea excepturi iste! Accusantium ad vero, deleniti corporis impedit porro nihil ipsam quia qui magnam, veniam tempore ipsa praesentium totam optio ut nisi animi officiis eveniet? Culpa quo expedita velit repudiandae, recusandae vero quia numquam quaerat voluptate deserunt cum nam possimus maxime nulla quibusdam similique delectus excepturi repellendus obcaecati magni tenetur odio fugiat minima! Error doloribus eos sunt, nulla iste maxime, nam rerum qui a hic, totam sapiente rem possimus sit animi consequuntur quos? Minus neque nesciunt ipsa, quas fugiat assumenda voluptate, saepe quis libero esse, totam officiis delectus dolor facilis at dolorum veniam eligendi! Explicabo sint accusantium obcaecati culpa nesciunt quidem iusto nemo reprehenderit, natus a porro veniam dolore voluptatum enim alias voluptate quia libero tenetur veritatis reiciendis? Quis, accusamus veniam minima deleniti odit sint id, ducimus doloremque repudiandae voluptatem unde praesentium vero placeat inventore! Error ad ratione consectetur tempora totam, ea facilis soluta, hic aliquam provident aperiam laborum unde minima possimus ipsam similique voluptatum vitae dolor. Rem provident, quas porro maiores quam minima debitis consequuntur nobis totam laborum vel tenetur sapiente cum dolore modi perferendis. Minus quia ipsum illo perspiciatis saepe voluptate, corporis hic doloremque, nam beatae facilis quis numquam quae recusandae excepturi nesciunt quidem nobis delectus suscipit ut, tempore maiores. Sapiente nisi porro laboriosam incidunt. Rerum dolore eum quas quis inventore assumenda voluptates dolorum commodi repellat, eius eveniet, nulla laudantium incidunt. Ipsam sapiente quibusdam, minima ut ad culpa expedita architecto rerum dolores nostrum vel nulla, commodi dignissimos voluptatum, quis itaque! Ut quos fugiat unde mollitia magni inventore? Corporis blanditiis qui nemo magni totam consequatur facere quam at, ad mollitia tempora eius doloribus laboriosam recusandae impedit nobis ducimus. Cumque itaque repellendus eveniet minus, hic illo tempora velit repudiandae asperiores odit veritatis mollitia, fuga dolor nam doloribus corrupti laborum iste non? Architecto eaque dolores in illum nobis rem ullam hic, autem, voluptatum officia at quo iusto amet eveniet odit eius assumenda aut qui non nisi consequatur debitis fuga, fugiat quam? Labore sed sit qui vero quas unde ipsam quo aperiam et quod, ipsa dignissimos fuga voluptates magnam, ut exercitationem. Veniam, provident saepe natus nihil fuga, quasi laborum praesentium accusamus veritatis earum totam temporibus modi minus aut corporis aliquam quam rerum quisquam qui, harum repellendus beatae. Officia quis perspiciatis fugiat explicabo incidunt aperiam asperiores repudiandae possimus, iure minus ratione consequuntur libero eum laboriosam dolores aspernatur debitis non, qui ab nobis eveniet, labore corporis hic. Sapiente voluptatibus accusantium expedita perspiciatis id dolore aspernatur, incidunt nihil tempore excepturi in, ab dignissimos fuga? Molestias id ab aut nam quos! Impedit sed saepe vitae nisi! Minima maiores qui pariatur voluptatibus, commodi ab, eos rem aut expedita, dicta saepe? Earum est perferendis reprehenderit sequi doloribus suscipit mollitia accusamus, iure atque voluptas corporis autem nesciunt laudantium fugit dolorem necessitatibus in, excepturi impedit et. Fuga veritatis similique fugiat voluptate consequatur magni expedita maxime eveniet vero quo architecto quam voluptas aliquid, labore esse harum perspiciatis atque? Explicabo, veniam aut quisquam corrupti maxime aspernatur. Eius atque quibusdam vero obcaecati beatae id debitis molestias aspernatur ullam. Pariatur excepturi facilis iusto voluptatum, vel quod dolorem!
        </div>
      </div>
    </>
  )
}

export default React.memo(Dashboard)
