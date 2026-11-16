# Git 练习清单 ✅

> 每完成一项就在前面打个 `[x]`，这本身也是一次练习（改文件 → 提交）。

## 第 0 步：初始化配置（只需做一次）

```bash
git config --global user.name "你的名字"
git config --global user.email "你的GitHub邮箱"
```

## 第 1 关：第一次提交

在本目录（git-practice）下：

```bash
git init                 # 让这个文件夹变成 Git 仓库
git status               # 看看哪些文件没被跟踪
git add .                # 全部加入暂存区
git commit -m "第一次提交：个人名片页"   # 提交
git log --oneline        # 查看提交历史
```

## 第 2 关：体验「修改 → 提交」循环

1. 打开 `index.html`，把 `<h1>你的名字</h1>` 改成你自己的名字
2. `git diff` 看看改了什么
3. `git add index.html && git commit -m "把标题改成我的名字"`
4. 再改 `style.css` 里 `.card` 的圆角（border-radius），提交一次

## 第 3 关：推送到 GitHub

1. 打开 github.com → 右上角 **+** → **New repository**
2. 仓库名填 `git-practice`，选 Public，**不要**勾选任何初始化选项（README 等都不要）
3. 点击 Create，复制页面给出的 HTTPS 地址

```bash
git remote add origin https://github.com/你的用户名/git-practice.git
git branch -M main
git push -u origin main
```

刷新 GitHub 页面，代码上去了！

## 第 4 关：模拟「别人改了项目」—— clone 流程

真正的工作流是这样的：原型在 GitHub 上 → 你 clone 下来 → 改 → 推回去。
现在自己模拟一遍：

1. 在 GitHub 仓库页面点绿色 **Code** 按钮，复制地址
2. 换个空目录克隆：

```bash
cd 某个空文件夹
git clone https://github.com/你的用户名/git-practice.git
```

3. 在克隆出来的副本里改一个文件并提交推送：

```bash
# 改掉 bio 里的自我介绍文字，然后：
git add .
git commit -m "更新自我介绍"
git push
```

4. 回到原来的目录拉取远端更新：

```bash
git pull
```

## 第 5 关（进阶）：解决一次冲突

1. 在目录 A 把 README 的标题改成「版本 A」并提交
2. 先 `git push`
3. 在目录 B（你 clone 的那份）把同一个标题改成「版本 B」并提交，然后 `git push`
4. 你会看到 push 被拒绝！执行：

```bash
git pull
# Git 会标记冲突文件，打开 README.md，
# 手动删掉 <<<<<<< ======= >>>>>>> 标记，保留你想要的内容
git add README.md
git commit -m "解决冲突"
git push
```

恭喜，你已经掌握了日常 Git 的 90%。
