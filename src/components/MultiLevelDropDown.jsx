import React, { useState } from 'react'

const menuData = [
    {
      label: "Menu 1",
    },
    {
      label: "Menu 2",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
    },
    {
      label: "Menu 3",
      submenu: [
        { label: "Sub Menu 1" },
        { label: "Sub Menu 2" },
        { label: "Sub Menu 3" },
        { label: "Sub Menu 4" },
      ],
    },
    {
      label: "Menu 4",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
      
    },
];

const SingleMenuItem = ({menuItem}) => { 
    const [show, setShow] = useState(false)
    return <>
        <li class="w-full px-4 py-2 cursor-pointer border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex" onClick={() => { setShow(!show); }}>{menuItem.label}
            {menuItem.submenu && !show && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            }
             {menuItem.submenu && show &&  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>

            }
        </li>
                  { menuItem.submenu && show && menuItem.submenu.map(subMenu => {
                      return  <li class="w-full ml-5 px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"> { subMenu.label}</li>
                  })  }
    </>;
}


const MultiLevelDropDown = () => {
  return (
    <ul class="text-sm font-medium text-left text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {menuData.map(menuItem => { 
              return <>
                  <SingleMenuItem menuItem={menuItem} />
              </>
          })}
    </ul>
  )
}

export default MultiLevelDropDown