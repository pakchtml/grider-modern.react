import React from 'react'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
   return (
      <div className="ui container comments">

         <CommentDetail author="J" timeAgo="Today at 6:00PM" comment="New Post!"/>

         <ApprovalCard>
            <CommentDetail author="C" timeAgo="Today at 1:40PM" comment="Good times"/>
         </ApprovalCard>

         <ApprovalCard>
            <CommentDetail author="B" timeAgo="Today at 1:13PM" comment="so done with today"/>
         </ApprovalCard>

      </div>
   )
}

export default App
