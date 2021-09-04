/*
*  Zomboid executer UTIL
*
*  Author: Astroz
*
* Troll: https://pastebin.com/raw/paeaV4hY
*/
const fs = require('fs'), os = require('os'), uuid = require("uuid");

class ZomboidExec {
    constructor(Injection) {
        this.Injection = Injection
        this.LuaCache = `${os.homedir()}/Zomboid/Lua` 
        this.ZomboidPath = `${process.env['ProgramFiles(x86)']}/Steam/steamapps/common/ProjectZomboid`
        this.ScriptNames = ["",""] // Cache, and injection
    }

    Inject(InjectionS) {
        const RandInjection = "SandboxVars", RandCache = "PromoCodes"; // Creating random generated names
        InjectionS = InjectionS.replace("FILE_NAME_HERE", `${RandCache}.ini`) // Just updating the file here lol
        //== Injection ==\\
        this.ScriptNames[0] = `${this.ZomboidPath}/media/lua/client/${RandInjection}.lua`,  this.ScriptNames[1] = `${this.LuaCache}/${RandCache}.ini`
        
        /* Injecting first */
        fs.writeFileSync(this.ScriptNames[0], InjectionS, {encoding : "utf8"}) // Injection
        fs.writeFileSync(this.ScriptNames[1], "print(\"DABRICK-ZOMBOID-PROJECT\")", {encoding : "utf8"}) // Loading cache
    }

    Deattach() {
        try {
            /* Deattach */
           for(let i = 0; i < this.ScriptNames.length; i++) {
               fs.unlink(this.ScriptNames[i])
           }
        } catch(err) {}
    }

    Execute(Script) {
        const ScriptDir = this.ScriptNames[1]
        if(fs.existsSync(ScriptDir)) {
            /* Change script to whatever */
            fs.writeFileSync(ScriptDir, `-- GUID_${uuid.v4()}\n\n${Script}`, {encoding : "utf8"})
            return true
        }
        return false
    }

}

exports.ZomboidExec = ZomboidExec
