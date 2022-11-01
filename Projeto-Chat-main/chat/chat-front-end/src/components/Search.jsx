import React from 'react'

const Search = () => {
    return(
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Encontrar usuário'/>
            </div>
            <div className="userChat">
                <img src="https://t.ctcdn.com.br/mHQE3tzu_N-R3Ce3YSVha4mSgi4=/512x288/smart/filters:format(webp)/i601453.png" alt="" />
                <div className="userChatInfo">
                    <span>Paulo</span>
                </div>
            </div>
        </div>

    )
} 

export default Search