import { type } from 'os';
import React, { Component } from 'react'

type PostProps ={
    title:string;
    description:string;
    tags:string[];
};

type PostState={};

export default class Post extends Component<PostProps,PostState> {
  render() {
    return (
      <div className='p-6 border border-slate-400 w-full rounded mt-2'>
        <h3 className='text-center'>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <span className='w-full mt-3 flex space-x-3'>
            <span className='px-6 py-2 border border-slate-400 rounded'>
                <h6>Tag 1</h6>
            </span>
        </span>
      </div>
    )
  }
}
