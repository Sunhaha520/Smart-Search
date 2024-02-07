import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">
        搜索结果由AI大模型提供总结，可能会犯错误。请考虑核实重要信息。.
      </div>
      <div className="text-zinc-400"></div>

      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <a className="hover:text-zinc-950" href="https://www.jidian.space">
          官网
        </a>
        <a className="hover:text-zinc-950" href="https://search.xiaoayu.ren">
          主页
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://github.com/sunhaha520/AI-Search"
        >
          Github
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://twitter.com/Dereksunmo"
        >
          推特
        </a>
        <a className="hover:text-zinc-950" href="https://www.xiaoayu.ren">
          博客
        </a>
      </div>
    </div>
  );
};
