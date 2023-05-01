import React from 'react';
import { HomeIcon ,LightningBoltIcon, BadgeCheckIcon,CollectionIcon,SearchIcon,UserIcon} from '@heroicons/react/outline';
import HeaderIcons from './HeaderIcons';



function Header() {

  const HeaderTitle = [
    {"Title":"Home","Icon": HomeIcon}, 
    {"Title":"Trending","Icon":LightningBoltIcon},
    {"Title":"Verified","Icon":BadgeCheckIcon},
    {"Title":"Collections","Icon":CollectionIcon},
    {"Title":"Search","Icon":SearchIcon},
    {"Title":"Account","Icon":UserIcon},
  ]
  
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className='flex justify-end sm:flex-row '>     
        {HeaderTitle.map((title, index) => (
          <HeaderIcons  key={index} Icon={title.Icon} Title={title.Title} />
        ))}
      </div>
     <div className='flex items-center position:sticky '>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hulu_logo_2017.svg/2560px-Hulu_logo_2017.svg.png" 
        alt="Logo" 
        height={100}
        width={200}
        />  
     
      </div>
    </header>
  )
}

export default Header
