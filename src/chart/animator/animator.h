#ifndef ANIMATOR_H
#define ANIMATOR_H

#include <memory>
#include <functional>

#include "chart/generator/diagram.h"

#include "planner.h"
#include "options.h"

namespace Vizzu
{
namespace Anim
{

class Animator :
    public ::Anim::Control,
    public Planner
{
public:
	typedef std::function<void(Diag::DiagramPtr, bool)> OnComplete;

	Animator();
	Animator(const Animator &) = delete;

	void animate(const Diag::DiagramPtr &diagram,
	    Options &&options = Options(),
	    OnComplete onThisCompletes = OnComplete());

	Util::Event<Diag::DiagramPtr> onDraw;
	Util::Event<> onProgress;

private:
	Diag::DiagramPtr source;
	Diag::DiagramPtr target;
	Diag::DiagramPtr targetCopy;
	Diag::DiagramPtr actual;
	OnComplete completionCallback;
	void init(Diag::DiagramPtr diagram);
	void finish(bool ok);
	void prepareActual();
	void prepareActualMarkersInfo();
	void copyTarget();
	void cancel();
};

}
}

#endif
