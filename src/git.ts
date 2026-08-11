import simpleGit from 'simple-git';
import { Commit } from './types';

const git = simpleGit();

export async function getCommitsBetween(from: string, to: string): Promise<Commit[]> {
  const log = await git.log({
    from: from,
    to: to,
    format: {
      hash: '%H',
      message: '%s',
      author: '%an',
      date: '%ai',
    },
  });

  return log.all.map((entry) => ({
    hash: entry.hash.substring(0, 8),
    message: entry.message,
    author: entry.author,
    date: entry.date,
  }));
}

export async function getCurrentBranch(): Promise<string> {
  const branch = await git.revparse(['--abbrev-ref', 'HEAD']);
  return branch.trim();
}

export async function getTags(): Promise<string[]> {
  const tags = await git.tags();
  return tags.all;
}