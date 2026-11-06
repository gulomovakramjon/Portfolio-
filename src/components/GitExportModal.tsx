import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  GitBranch, 
  Download, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink, 
  FolderGit2, 
  CheckCircle2,
  FileCode,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GitExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitExportModal: React.FC<GitExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [repoName, setRepoName] = useState('radian-learning-platform');
  const [username, setUsername] = useState('your-github-username');
  const [protocol, setProtocol] = useState<'https' | 'ssh'>('https');

  const remoteUrl = protocol === 'https' 
    ? `https://github.com/${username}/${repoName}.git`
    : `git@github.com:${username}/${repoName}.git`;

  const pushCommand = `git remote add origin ${remoteUrl}
git branch -M main
git push -u origin main`;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleDownloadZip = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#FBBF24', '#FDE68A', '#10B981']
    });

    const link = document.createElement('a');
    link.href = '/radian-learning-platform.zip';
    link.download = 'radian-learning-platform.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-stone-900 border border-amber-500/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.15)] overflow-hidden z-10 text-stone-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-800 bg-stone-950/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                  <span>Export Project to Git</span>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Git Initialized
                  </span>
                </h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  Clean commit history created on branch <code className="text-amber-400 font-mono">main</code>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Quick Option 1: Direct Ready-To-Push ZIP Download */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-stone-900 to-stone-900 border border-amber-500/40 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Option 1 · Instant Download
                  </div>
                  <div className="text-sm font-bold text-stone-100 mt-1">
                    Download Full Repository Archive (.zip)
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Includes all TypeScript components, Tailwind config, assets, and comprehensive README.
                  </p>
                </div>

                <button
                  onClick={handleDownloadZip}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all shrink-0 cursor-pointer active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download ZIP</span>
                </button>
              </div>
            </div>

            {/* Quick Option 2: Push to GitHub / GitLab / Bitbucket */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                    Option 2 · Push to Remote Git Repository
                  </div>
                  <div className="text-sm font-bold text-stone-100 mt-0.5">
                    Push Current Git Commits to Your GitHub
                  </div>
                </div>

                {/* HTTPS / SSH switcher */}
                <div className="flex items-center bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs">
                  <button
                    onClick={() => setProtocol('https')}
                    className={`px-3 py-1 rounded-lg transition-colors font-mono text-[11px] ${
                      protocol === 'https' 
                        ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30' 
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    HTTPS
                  </button>
                  <button
                    onClick={() => setProtocol('ssh')}
                    className={`px-3 py-1 rounded-lg transition-colors font-mono text-[11px] ${
                      protocol === 'ssh' 
                        ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30' 
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    SSH
                  </button>
                </div>
              </div>

              {/* Configure GitHub Username & Repo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-stone-400 font-medium mb-1">GitHub Username or Org</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.trim() || 'your-username')}
                    placeholder="e.g. akramjon-gulomov"
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 font-mono text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 font-medium mb-1">Repository Name</label>
                  <input
                    type="text"
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value.trim() || 'radian-learning-platform')}
                    placeholder="e.g. radian-learning-platform"
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 font-mono text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              {/* Terminal Command Snippet */}
              <div className="rounded-2xl bg-stone-950 border border-stone-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-stone-800 bg-stone-950/80 text-xs text-stone-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-mono text-[11px]">Terminal Commands</span>
                  </div>
                  <button
                    onClick={() => handleCopy(pushCommand, 1)}
                    className="flex items-center gap-1.5 text-[11px] text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {copiedIndex === 1 ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Commands</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 font-mono text-xs text-stone-300 space-y-1.5 leading-relaxed overflow-x-auto">
                  <div className="text-stone-500"># 1. Add your remote repository on GitHub:</div>
                  <div className="text-amber-300 font-semibold selection:bg-amber-500/30">
                    git remote add origin {remoteUrl}
                  </div>
                  <div className="text-stone-500 pt-1"># 2. Ensure main branch:</div>
                  <div className="text-stone-300">git branch -M main</div>
                  <div className="text-stone-500 pt-1"># 3. Push all commits & code:</div>
                  <div className="text-emerald-300 font-semibold">git push -u origin main</div>
                </div>
              </div>
            </div>

            {/* Current Commits Verification */}
            <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2 text-xs">
              <div className="font-semibold text-stone-200 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-amber-400" />
                  Existing Git Commits Prepared in Repository
                </span>
                <span className="text-[10px] font-mono text-stone-400">branch: main</span>
              </div>
              <div className="space-y-1 text-stone-400 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-stone-200">
                  <span className="text-amber-400 font-bold">24e570d</span>
                  <span>feat: integrate main portfolio with trilingual support and connect Radian interactive showcase</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <span className="text-amber-400 font-bold">5b1d6a4</span>
                  <span>feat: add interactive Git export modal, zip bundle generator, and remote push instructions</span>
                </div>
                <div className="flex items-center gap-2 text-stone-400">
                  <span className="text-amber-400 font-bold">b1cb0a8</span>
                  <span>docs: add comprehensive README with setup instructions</span>
                </div>
                <div className="flex items-center gap-2 text-stone-400">
                  <span className="text-amber-400 font-bold">6827bbb</span>
                  <span>feat: Radian Learning Center UI/UX portfolio showcase with interactive prototypes</span>
                </div>
              </div>
            </div>

            {/* Quick 3-Step Guide */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800/80 space-y-1">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[10px] flex items-center justify-center">1</div>
                <div className="font-semibold text-stone-200">Create GitHub Repo</div>
                <p className="text-[11px] text-stone-400">Go to github.com/new and create a new repository without initializing a README.</p>
              </div>

              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800/80 space-y-1">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[10px] flex items-center justify-center">2</div>
                <div className="font-semibold text-stone-200">Add Remote & Push</div>
                <p className="text-[11px] text-stone-400">Paste the commands above to push all 25 source files and commit history.</p>
              </div>

              <div className="p-3 rounded-xl bg-stone-950 border border-stone-800/80 space-y-1">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[10px] flex items-center justify-center">3</div>
                <div className="font-semibold text-stone-200">Deploy Anywhere</div>
                <p className="text-[11px] text-stone-400">Ready to deploy seamlessly on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.</p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 px-6 border-t border-stone-800 bg-stone-950/80 text-xs">
            <div className="text-stone-400 flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full commit history & MIT license included</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
